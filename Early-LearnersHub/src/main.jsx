import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import LandingPage from './Pages/LandingPage';
import AuthToggle from './Pages/AuthToggle';
import Admin from './Pages/Admin/Admin';
import Content from './Pages/Admin/Content';
import Parent from './Pages/Admin/Parent';
import Student_prog from './Pages/Admin/Student_prog';
import Team from './Pages/Team';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthToggle />} />
        <Route path="/team" element={<Team />} />

        <Route path="Admin/admin" element={<Admin />} />
        <Route path="Admin/content" element={<Content />} />
        <Route path="/Admin/progress" element={<Student_prog />} />
        <Route path="/Admin/parent" element={<Parent />} />


        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
