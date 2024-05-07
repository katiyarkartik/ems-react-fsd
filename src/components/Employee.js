import { useState } from "react";
import AddEmployee from "./Employee/AddEmployee";
import EmpList from "./Employee/EmpList";
import GetEmpById from "./Employee/GetEmpById";
import UpdateEmp from "./Employee/UpdateEmp";
import DeleteEmp from "./Employee/DeleteEmp";
import GetEmpByName from "./Employee/GetEmpByName";
const Employee = () => {
    const [subMenu, setSubMenu] = useState(1)

    return (
        <>
            
            <div className="w-100 ">
                <ul className="px-4 d-flex justify-content-between  border border-1  bg-light border-light">
                  
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(1)
                    }}>All Emp List</li>
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(2)
                    }}>Add an Employe</li>
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(3)
                    }}>Get By Id</li>
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(4)
                    }}>Get By Name</li>
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(5)
                    }}>Update Employee</li>
                    <li className="p-2 " onClick={()=>{
                        setSubMenu(6)
                    }}>Delete Employee</li>
                </ul>
            </div>
            {subMenu === 1 && <EmpList />}
            {subMenu === 2 && <AddEmployee />}
            {subMenu === 3 && <GetEmpById/>}
            {subMenu === 4 && <GetEmpByName />}
            {subMenu === 5 && <UpdateEmp />}
            {subMenu === 6 && <DeleteEmp />}
            
         
        </>
    );
};

export default Employee;


// import { useState } from "react";

// const Employee = () => {

//     // let firstName = ''; // does not work
//     const [firstName, setFirstName] = useState(''); // works

//     const handleNameInput = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         // firstName = evt.target.value; // does not work
//         setFirstName(evt.target.value); // works
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee name is {firstName}.</p>
//             <form>
//                 <input type="text" name="firstName" value={firstName} onChange={handleNameInput} />
//             </form>
//         </>
//     );
// };

// export default Employee;

// const Employee = () => {

//     const employee = {
//         id: 101,
//         firstName: 'Sonu',
//         salary: 10.5,
//         isIndian: true,
//         phone: 98765544310 // ''
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {employee.firstName}.</p>
//             <p>Employee salary is ₹{employee.salary}/-.</p>
//             <>
//                 {
//                     employee.phone &&
//                     <p>Employee primary phone is {employee.phone}.</p>
//                 }
//             </>
//         </>
//     );
// };

// export default Employee;


// const Employee = () => {

//     const salary = 50000;
//     const firstName = 'Sonu';

//     return (
//         <>
//             <h1>Employee component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {firstName}.</p>
//             <p>Employee salary is ₹{salary}/-.</p>
//             <p>But the take home is ₹{salary - 10000}/-.</p>
//         </>
//     );
// };

// export default Employee;
