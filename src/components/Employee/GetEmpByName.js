import React, { useState } from 'react';

import axios from 'axios';
import EmployeeService from '../../services/EmployeeService';
const GetEmpByName = () => {
  const [empName,setEmpName] =useState('');
  const [emp,setEmp] =useState('');

const getEmpByName=()=>{
  // axios.get(`http://localhost:9090/emp/get-emp-by-name/${empName}`)
  EmployeeService.getEmployeeByName(empName)
  .then((resp) => {
      console.log(resp);
      setEmp(resp);
      
  }).catch((error)=>{
    alert("user doesn't exist")
  })

}
 
  return (

    <div className='w-50 d-flex flex-column align-item-center mx-auto m-0'>
      <input className='text-dark py-2 fw-bold my-2' placeholder='Enter employee Name' onChange={(e)=>{
        setEmpName(e.target.value)
      }}/>
      <button onClick={getEmpByName} className='bg-success text-light p-2'> Get Emp Data</button>
      {emp && emp.map(emp =>
                        <div key={emp.id} >
                            <p className="border-1 fw-bold" >First Name: {emp.firstName} </p>
                            <p className="border-1 fw-bold pb-2">Salary :{emp.salary} </p>
                        </div>
                    )}
  
    </div>
  )
}

export default GetEmpByName;