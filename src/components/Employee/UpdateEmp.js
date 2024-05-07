import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeService from '../../services/EmployeeService';


const UpdateEmp = () => {
  const dispatch= useDispatch();
  const empList = useSelector(state=> state.emp.empDataList);
  console.log(empList);
  const [empData, setEmpData] = useState({employeeId:'', firstName: '',salary: '' });

  const handleChange = (evt) => {
    
    setEmpData({ ...empData, [evt.target.name]: evt.target.value });

  };

  const handleSubmit =(evt)=>{
    evt.preventDefault();
    
    console.log(empData.employeeId, empData.firstName, empData.salary)
    const foundEmp = empList.find((emp)=> emp.employeeId == empData.employeeId)
    if(foundEmp){
      const updatedData = {
        "employeeId": empData.employeeId,
        "firstName": empData.firstName,
        "salary": empData.salary
    }
      // axios.put('http://localhost:9090/emp/update-emp',updatedData)
      EmployeeService.updateEmployee(updatedData)
      .then((res)=>{
        alert('employee updated')
        
        setEmpData({employeeId:'', firstName: '',salary: '' })
        return  res;
      }).catch(err =>  {
        alert("Cannot update employee")
      })
    }
    else{
      alert("invalid")
    }
    
  }

  return (
    <div className="d-flex justify-content-center my-4">
        
        <form className="add-emp-form" onSubmit={handleSubmit}>
            <h3 className="text-center">Update Employe</h3>
            
            <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" id="firstName" name="employeeId" onChange={handleChange} placeholder="Enter Employee ID" required autoFocus />

            <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" id="firstName" name="firstName" onChange={handleChange}  placeholder="Enter first name" required autoFocus />
           
            <br />
            
            {/* <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
            {errors.email && <span className="error">{errors.email}</span>}
            <br />
         
            <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
            {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
            <br />
            */}
            <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="salary" name="salary" onChange={handleChange}  placeholder="Enter salary" />
           
            <br />
            <input className="w-100 px-2 rounded-1 py-2 my-1 border-0 bg-dark text-light "   type="submit" value="Update Employee" />
        </form>
    </div>
);
}

export default UpdateEmp






























// import axios from "axios";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const UpdateEmp = () => {
//   const empList = useSelector(state => state.emp.empDataList)
//   const dispatch = useDispatch()
  
//   function findEmployeeById(id){
//     return empList.find((emp)=> emp.employeeId == id)
//   }

//     const backendUrl = 'http://localhost:9090/emp/update-emp';
    
//     const [empData, setEmpData] = useState({ firstName: '',salary: '' });
//     const [errors, setErrors] = useState({});

//     const handleChange = (evt) => {
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//         setErrors({ ...errors, [evt.target.name]: '' });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!empData.firstName.trim()) {
//             newErrors.firstName = "First name is required";
//             isValid = false;
//         }


//         if (empData.salary <= 0 || isNaN(empData.salary)) {
//             newErrors.salary = "Salary must be a positive number";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         if (validateForm()) {
//             axios.put(backendUrl, empData)
//                 .then((resp) => {
//                     alert(`${resp.data.firstName}  updated successfully!`);
//                     setEmpData({ firstName: '',
//                     //  email: '', aadhaar: '', 
//                     salary: '' });
//                 })
//                 .catch(error => {
//                     console.error("Error adding employee:", error);
//                 });
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center my-4">
//               <table>
//                 <thead>
//                 <th>Employee ID</th><th>Name</th><th>Salary</th>
//                 </thead>

//                 <tbody>
//                   <tr>
//                     <td>{findEmployeeById.employeeId}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             <form className="add-emp-form" onSubmit={handleSubmit}>

//                 <h3 className="text-center">Update Employe</h3>
//                 <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" id="employeeId" name="employeeId"  onChange={handleChange} placeholder="Enter Employee Id" required autoFocus />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//                 <br />
//                 <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" id="firstName" name="firstName" value={empList[0].firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//                 <br />
                
//                 {/* <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 <br />
             
//                 <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
//                 <br />
//                 */}
//                 <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 {errors.salary && <span className="error">{errors.salary}</span>}
//                 <br />
//                 <input className="w-100 px-2 rounded-1 py-2 my-1 border-0 bg-dark text-light "   type="submit" value="Add Employee" />
//             </form>
//         </div>
//     );
// };

// export default UpdateEmp;
