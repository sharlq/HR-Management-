import React from 'react'
import UpdateProfile from '../../components/profile/updateProfile/UpdateProfile'
import { useVerify } from "../../components/customHooks/useVerify";
const update = () => {
    useVerify();
    return (
        <div className="mainContent">
            <UpdateProfile/>
        </div>
    )
}

export default update
