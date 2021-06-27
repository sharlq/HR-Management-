import React,{useState} from 'react'
import Link from 'next/Link'
const SideBar = () => {
    const [stampClass,setStampClass] = useState({
        workingSchdual:"stamp active",
        leaveRequest:"stamp",
        showLeaveRequests:"stamp"
    })
    
    return (
        <div className="services-sidebar">
            <div className="services-sidebar_employee">
                <h3>Employee services</h3>
                <ul>
                <div className="listItem">
                <div className={stampClass.workingSchdual}/>
                    <li>Working Schdual</li>
                </div>
                <div className="listItem">
                    <div className={stampClass.leaveRequest}/>
                    <li>Leave Request</li>
                </div>
                </ul>
            </div>
            <div className="services-sidebar_manager">
                <h3>Manager section</h3>
                <Link href='services/showLeaveRequests'>
                <div className="listItem" >
                <div className={stampClass.showLeaveRequests} />
                <li>Show Leave Requests</li>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar
