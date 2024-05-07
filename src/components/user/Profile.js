import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <div className="w-100 d-flex flex-column align-item-center border-2">

            {userData && (
                <div className="d-flex justify-content-center gap-4 py-4 align-item-center" style={{background:"#1F1E39"}}>
                    <div className="text-light p-2" >
                    <p className="py-2">Username: {userData.username}</p>
                    <p className="py-2">First name: {userData.firstName}</p>
                    <p className="py-2">Last Name: {userData.lastName}</p>
                    <p className="py-2">Phone: {userData.phone}</p>
                    <p className="py-2">Email: {userData.email}</p>
                    </div>
                    <div>
                    {userData.avatar && <img style={{borderRadius:"100px"}} width={'200px'} height={'200px'} src={userData.avatar} alt="Avatar" />}
                    </div>
                </div>
            )}
            <UpdateProfile />
        </div>
    );
};

export default Profile;
