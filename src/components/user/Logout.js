import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        console.log('logoutSubmit');
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);

    };

    return (
        <div >
            <h1 className="text-center text-dark my-4">Do You want to Logout</h1>
            <div className="d-flex justify-content-center align-item-center">
            <button  onClick={logoutSubmit} className="text-white bg-danger rounded-1 px-4 py-2 border-0" > Logout</button>
            </div>
            {afterLogout && <p>{afterLogout}</p>}
        </div>
    );
};

export default Logout;


