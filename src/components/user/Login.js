import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";
import "./Form.css"
const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <>

            
                <div className="position-absolute top-50 start-50 translate-middle border rounded  bg-dark text-light p-4 col-4">
                    <h2 className="my-2">Login Here</h2>
                    <form  onSubmit={handleLoginSubmit}>
                        <label className="my-1">Username</label>
                        <input className="w-100 px-2 rounded-1 py-1 my-1 border-0" type="text" name="username" value={loginData.username}
                            onChange={handleChange} autoFocus required />
                        <br />
                        <label className="my-1">Password</label>
                        <input  className="w-100 px-2 rounded-1 py-1 my-1 border-0" type="password" name="password" value={loginData.password}
                            onChange={handleChange} required />
                        <br />
                        <input type="submit" className="w-100 bg-primary rounded-1 py-1 my-4 text-light border-0 fw-medium" value="Login" />
                    </form>
                    {afterSubmit && <p className="text-center">{afterSubmit}</p>}
                    <p className="text-center my-2">Not yet registered? <Link className="text-decoration-underline text-primary fw-medium" to={'/register'}>Register</Link> </p>
                </div>
            
        </>
    );
};
export default Login;