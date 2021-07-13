import React from 'react'
import Services from '../../components/services/services'
import { useVerify } from "../../components/customHooks/useVerify";
const index = () => {

    useVerify()
    
    return (
        <div className="mainContent">
            <Services />
        </div>
    )
}

export default index
