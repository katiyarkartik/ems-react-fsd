import axios from "axios";

const BASE_URL = 'http://localhost:9090/emp'

const EmployeeService = {

    getAllEmployee: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-all-emps`);
            return response.data;
        }
        catch (error) {
            console.log(error)
            throw new Error(error);
        }
    },
    getEmployeeById: async (employeeId) => {
        try {

            const response = await axios.get(`${BASE_URL}/get-emp-by-id/${employeeId}`);
            return response.data;
        }
        catch (error) {

            console.log(error);
            throw new Error(error);
        }
    },
    getEmployeeByName: async (employeeName) => {
        try {

            const response = await axios.get(`${BASE_URL}/get-emp-by-name/${employeeName}`);
            return response.data;
        }
        catch (error) {

            console.log(error);
            throw new Error(error);
        }
    },
    deleteEmployee: async (employeeId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete-emp/${employeeId}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    addEmployee: async (empData) => {
        try {

          const response=  await axios.post(`${BASE_URL}/add-emp`,empData);
            return response.data;

        } catch (error) {
            console.log(error);
            throw new Error;
        }

    },
    updateEmployee:async(updatedData)=>{
        try {
        const response =await axios.put(`${BASE_URL}/update-emp`,updatedData);
        return response;
        } catch (error) {
            console.log(error);
            throw new Error;
        }
    }


}

export default EmployeeService;
