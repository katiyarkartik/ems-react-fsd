
import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'http://localhost:9090/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '',salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
        //     newErrors.email = "Invalid email address";
        //     isValid = false;
        // }

        // if (!/^\d{12}$/.test(empData.aadhaar)) {
        //     newErrors.aadhaar = "Aadhaar must be a 12-digit number";
        //     isValid = false;
        // }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName}  added successfully!`);
                    setEmpData({ firstName: '',
                    //  email: '', aadhaar: '', 
                    salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <div className="d-flex justify-content-center my-4">
            
            <form className="add-emp-form" onSubmit={handleSubmit}>
                <h3 className="text-center">Add Employe</h3>
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
                <br />
                
                {/* <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
             
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
                {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
                <br />
                */}
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                {errors.salary && <span className="error">{errors.salary}</span>}
                <br />
                <input className="w-100 px-2 rounded-1 py-2 my-1 border-0 bg-dark text-light "   type="submit" value="Add Employee" />
            </form>
        </div>
    );
};

export default AddEmployee;
