import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setAfterRegisterMessage(`Invalid credentials!`);
            });

    };

    return (
        // <>
        //     <h1>Register Component</h1>
        //     <p>Register here</p>
        //     <form onSubmit={handleRegisterSubmit}>
        //         <label className="my-1">Username</label>
        //         <input type="text" name="username" value={registerData.username}
        //             onChange={handleChange} autoFocus required />
        //         <br />
        //         <input type="password" name="password" value={registerData.password}
        //             onChange={handleChange} required />
        //         <br />
        //         <input type="submit" value="Register" />
        //     </form>
        //     <>
        //         <p>{afterRegisterMessage && afterRegisterMessage} </p>
        //     </>
        //     <p>Already registered? <Link to={'/login'}>Login</Link> </p>

        // </>
        <div className="position-absolute top-50 start-50 translate-middle border rounded  bg-dark text-light p-4 col-4">
        <h2 className="my-2">Register Here</h2>
        <form  onSubmit={handleRegisterSubmit}>
            <label className="my-1">Username</label>
            <input className="w-100 px-2 rounded-1 py-1 my-1 border-0" type="text" name="username"value={registerData.username}  onChange={handleChange} autoFocus required />
            <br />
            <label className="my-1">Password</label>
            <input  className="w-100 px-2 rounded-1 py-1 my-1 border-0" type="password" name="password" value={registerData.password}
                  onChange={handleChange} required />
            <br />
            <input type="submit" className="w-100 bg-primary rounded-1 py-1 my-4 text-light border-0 fw-medium" value="Register" />
        </form>
        <>
           <p className="text-center text-success fw-bold my-2">{afterRegisterMessage && afterRegisterMessage} </p>
        </>
            <p className="text-center my-2" >Already registered? <Link to={'/login'} className="text-decoration-underline text-primary fw-medium">Login</Link> </p>
    </div>

    );
};
export default Register;