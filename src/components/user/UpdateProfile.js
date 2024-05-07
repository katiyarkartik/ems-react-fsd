// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <div className="w-100">
            <h1 className="text-center py-2"> Update User </h1>
        <div className="w-100 d-flex  justify-content-center align-item-center">
          
            <form onSubmit={handleSubmit} className="w-50">
                <label>First Name:</label>
                <br/>
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} autoFocus required />
                <br />
                <label>Last Name:</label> <br />
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} required />
                <br />
                <label >Phone:</label> <br />
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="number" name="phone" value={formData.phone}
                    onChange={handleChange} required />
                <br />
                <label>Email:</label> <br />
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="email" name="email" value={formData.email}
                    onChange={handleChange} required />
                <br />
                <label>Avatar:</label> <br />
                <input className="w-100 px-2 rounded-1 py-1 my-1 border-2" type="text" name="avatar" value={formData.avatar}
                    onChange={handleChange} />
                <br />
                <button type="submit" className="bg-success text-light p-2 w-100">Update Your Profile</button>
            </form>
        </div>
        </div>
    );
};

export default UpdateProfile;
