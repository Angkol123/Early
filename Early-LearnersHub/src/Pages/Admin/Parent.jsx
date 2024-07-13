import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';

const Parent = () => {
  const [data, setData] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false); // State for confirmation modal
  const [deleteId, setDeleteId] = useState(null); // State to store ID of item to delete

  // Fetch parent users
  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = () => {
    fetch('http://localhost:8081/get_parent')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Function to handle delete request
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/delete_parent/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // If delete is successful, update state to reflect changes
        setData(data.filter(item => item.id !== id));
      } else {
        console.error('Failed to delete record');
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    } finally {
      // Close confirmation modal
      setConfirmModalOpen(false);
    }
  };

  // Function to open confirmation modal
  const openConfirmModal = (id) => {
    setDeleteId(id);
    setConfirmModalOpen(true);
  };

  // Function to close confirmation modal
  const closeConfirmModal = () => {
    setDeleteId(null);
    setConfirmModalOpen(false);
  };

  // Function to fetch and display detailed parent information in modal
  const openModal = (id) => {
    fetch(`http://localhost:8081/get_parent/${id}`)
      .then(res => res.json())
      .then(parent => {
        setSelectedParent(parent);
        setModalOpen(true);
      })
      .catch(error => console.error('Error fetching parent details:', error));
  };

  // Function to handle modal close
  const closeModal = () => {
    setSelectedParent(null);
    setModalOpen(false);
  };

  return (
    <div>
      <NavbarAdmin />
      <div className='w-full h-[85vh] bg-slate-600 px-[10vh] pt-9'>
        <div className='w-full bg-slate-300 h-full overflow-auto rounded-lg shadow-lg'>
          <table className='min-w-full bg-white rounded-lg'>
            <thead>
              <tr>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Parent Name</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Contact Number</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Parent Age</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Student Name</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Grade Level</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Progress</th>
                <th className='py-3 px-4 bg-slate-700 text-white text-center font-semibold sticky top-0'>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr className={i % 2 === 0 ? 'bg-white' : 'bg-slate-100'} key={i}>
                  <td className='py-3 px-4 text-center'>{d.Full_Name}</td>
                  <td className='py-3 px-4 text-center'>{d.Contact_No}</td>
                  <td className='py-3 px-4 text-center'>{d.Age}</td>
                  <td className='py-3 px-4 text-center'>{d.Student_Name}</td>
                  <td className='py-3 px-4 text-center'>{d.grade_level}</td>
                  <td className='py-3 px-4 text-center'>{d.progress}%</td>
                  <td className='py-3 px-4 text-center'>
                    <button
                      className='bg-red-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-red-600'
                      onClick={() => openConfirmModal(d.id)}
                    >
                      Delete
                    </button>
                    <button
                      className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600'
                      onClick={() => openModal(d.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for confirming delete */}
      {confirmModalOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4'>
            <div className='fixed inset-0 bg-gray-500 opacity-75'></div>
            <div className='relative bg-white rounded-lg shadow-xl max-w-md w-full p-6'>
              <h2 className='text-lg font-semibold mb-4'>Confirm Deletion</h2>
              <p className='mb-4'>Are you sure you want to delete this record?</p>
              <div className='flex justify-end'>
                <button
                  className='bg-red-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-red-600'
                  onClick={() => handleDelete(deleteId)}
                >
                  Delete
                </button>
                <button
                  className='bg-gray-300 text-gray-800 py-1 px-3 rounded-md hover:bg-gray-400'
                  onClick={closeConfirmModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for displaying detailed view */}
      {selectedParent && (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${modalOpen ? 'block' : 'hidden'}`}>
          <div className='flex items-center justify-center min-h-screen px-4'>
            <div className='relative bg-white rounded-lg shadow-xl max-w-3xl w-full'>
              <div className='p-6'>
                <h2 className='text-lg font-semibold mb-4'>Parent Details</h2>
                <p><strong>Full Name:</strong> {selectedParent.Full_Name}</p>
                <p><strong>Contact Number:</strong> {selectedParent.Contact_No}</p>
                <p><strong>Age:</strong> {selectedParent.Age}</p>
                <p><strong>Student Name:</strong> {selectedParent.Student_Name}</p>
                <p><strong>Grade Level:</strong> {selectedParent.grade_level}</p>
                <p><strong>Progress:</strong> {selectedParent.progress}%</p>
              </div>
              <div className='absolute top-0 right-0 p-4'>
                <button className='text-gray-500 hover:text-gray-700' onClick={closeModal}>
                  <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parent;
