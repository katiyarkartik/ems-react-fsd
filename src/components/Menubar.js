import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <div>  
                
                <ul className="d-flex bg-dark py-3 text-light justify-content-center gap-5">
                    <li className=""> <Link to={'/'}>Home</Link> </li>
                    <li className="d-flex align-item-center"> <Link to={'/emp'}>Employee</Link> </li>
                    <li className="d-flex align-item-center"> <Link to={'/profile'}>Profile</Link> </li>
                    <li className="d-flex align-item-center"> <Link to={'/logout'}>Logout</Link> </li>
                </ul>
            </div>
        );
    }
    else {
        return (
            <div>  

               
                <ul className=" d-flex bg-dark py-3 text-light justify-content-center align-item-center gap-5">
                <h4 className="fw-bold text-light">IBM</h4>
                    <li className="d-flex align-item-center"> <Link to={'/'}>Home</Link> </li>
                    <li className="d-flex align-item-center"> <Link to={'/register'}>Register</Link> </li>
                    <li className="d-flex align-item-center"> <Link to={'/login'}>Login</Link> </li>
                </ul>
            </div>
        );
    }
};

export default Menubar;
