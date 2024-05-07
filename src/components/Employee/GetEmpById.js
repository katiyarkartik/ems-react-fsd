import React, { useState } from 'react';

import axios from 'axios';
import EmployeeService from '../../services/EmployeeService';
const GetEmpById = () => {
  const [empId,setEmpId] =useState('');
  const [emp,setEmp] =useState('');

const getEmpById=()=>{
  // axios.get(`http://localhost:9090/emp/get-emp-by-id/${empId}`)
  // .then((resp) => {
  //     console.log(resp.data);
  //     setEmp(resp.data);
      
  // })

  EmployeeService.getEmployeeById(empId).then((resp)=>{
    console.log(resp);
    setEmp(resp);
  }).catch((error)=>{
    alert("User does not exist")
  })
  console.log(emp);
}
 
  return (

    <div className='w-50 d-flex flex-column align-item-center mx-auto m-0'>

      <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" placeholder='Enter employee ID' onChange={(e)=>{
        setEmpId(e.target.value)
      }}/>
      <button className='p-2 bg-success text-light' onClick={getEmpById}> Get Emp Data</button>
      <p className='text-dark py-2 fw-bold'>First name: {emp.firstName}</p>
      <p className='text-dark py-2 fw-bold'>Salary :{emp.salary}</p>
  
    </div>
  )
}

export default GetEmpById