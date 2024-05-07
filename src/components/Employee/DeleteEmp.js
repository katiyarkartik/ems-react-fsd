import React, { useState } from 'react'
import axios from 'axios';
import EmployeeService from '../../services/EmployeeService';
const DeleteEmp = () => {
  const [empId, setEmpId] =useState('');

  const deleteEmployee =()=>{

    // axios.delete(`http://localhost:9090/emp/delete-emp/${empId}`)
    EmployeeService.deleteEmployee(empId)
    .then((response) => {
      
      console.log('Employee deleted successfully:', response.data);
      alert("Employee Deleted successfully");
      setEmpId('')
     
      setEmpId('');
    })
    .catch((error) => {
      alert("No Employee found")
      
    });
  }
  return (
    <div className='w-50 d-flex flex-column align-item-center mx-auto m-0'>

      <input className="w-100 px-2 rounded-1 py-1 my-1 border-2 " placeholder='Enter id ' onChange={(e)=>{
        setEmpId(e.target.value);
      }}/>
      <button onClick={deleteEmployee} className='bg-danger text-light fw-bold py-2'>Delete</button>
    </div>

  )
}

export default DeleteEmp