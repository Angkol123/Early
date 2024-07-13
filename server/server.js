const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'early_learner'
})
app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/get_parent', (req, res) => {
    const sql = "SELECT * FROM parent_list";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


// DELETE route to delete a parent record by ID
app.delete('/delete_parent/:id', (req, res) => {
    const parentId = req.params.id;
    const sql = "DELETE FROM parent_list WHERE id = ?";
    db.query(sql, [parentId], (err, result) => {
        if (err) {
            console.error('Error deleting parent:', err);
            return res.status(500).json({ error: 'Failed to delete parent record' });
        }
        console.log(`Deleted parent with id ${parentId}`);
        return res.status(200).json({ message: 'Parent record deleted successfully' });
    });
});


// GET route to fetch parent details by ID
app.get('/get_parent/:id', (req, res) => {
    const parentId = req.params.id;
    const sql = "SELECT * FROM parent_list WHERE id = ?";
    db.query(sql, [parentId], (err, result) => {
      if (err) {
        console.error('Error fetching parent details:', err);
        return res.status(500).json({ error: 'Failed to fetch parent details' });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: 'Parent not found' });
      }
      // Return the parent details
      res.status(200).json(result[0]);
    });
  });
  
  












app.get('/get_child', (req, res) => {
    const sql = "SELECT * FROM student_list";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

const port = 8081;
app.listen(port, ()=> {
    console.log ("listening ", port);
})