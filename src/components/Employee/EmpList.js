import axios from "axios";
import { useEffect, useState } from "react";
import "../user/Form.css"
import EmployeeService from "../../services/EmployeeService";
import { setAllEmps } from "../../redux/EmpSlice";
import { useDispatch, useSelector } from "react-redux";
const EmpList = () => {
    const dispatch =useDispatch();
    const empList = useSelector(state => state.emp.empDataList)
    useEffect(() => {
        console.log('useEffect');
        EmployeeService.getAllEmployee()
            .then((resp) => {
                console.log(resp);
                // setEmpList(resp);
                dispatch(setAllEmps(resp));

            })
            .catch(err => console.log(err))
        // axios.get('http://localhost:9090/emp/get-all-emps')
        //     .then((resp) => {
        //         console.log(resp.data);
        //         setEmpList(resp.data);
        //     })
    }, []);

    return (
        <div className="w-100" >
            <div>
                <h3 className="text-center my-3">Employee List</h3>
            <table   className="table">
                <thead className="bg-dark text-light">
                    <th className="p-2 border-1">Employee Id</th>
                    <th className="p-2 border-1">Name</th>
                     <th className="p-2 border-1">Salary</th> 
                </thead>
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.id} >
                           <td className="border-1">{emp.employeeId}</td>
                            <td className="border-1" >{emp.firstName} </td>
                            <td className="border-1">{emp.salary} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default EmpList;


