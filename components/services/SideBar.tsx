import React,{useState,useEffect} from 'react'
import Link from 'next/Link'
import {useSelector} from 'react-redux'
import { selectRank } from '../../redux/features/userSlice'
const SideBar = () => {
    const [stampClass,setStampClass] = useState({
        workingSchdual:"stamp active",
        leaveRequest:"stamp",
        showLeaveRequests:"stamp"
    })
    const [isManager,setIsManager] = useState(false)
    const [managerSectionClass,setManagerSectionClass] = useState('dontDisplay')
    const rank = useSelector(selectRank)
    const verifyManagerStatus = () =>{
        if(rank=='topManagement')setIsManager(true)
        if(isManager) setManagerSectionClass("services-sidebar_manager")
        console.log(rank,isManager)
    }

    useEffect(()=>{
        verifyManagerStatus();
    },[rank])
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
            <div className={managerSectionClass}>
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
