import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectRank } from "../../redux/features/userSlice";
import { useRouter } from "next/router";

const SideBar = () => {
  const rank = useSelector(selectRank);
  const router = useRouter();
  const [classes,setClasses] = useState({})
  const activeRoutsMap={
    "/services/viewEmployees":"listItem",
    "/services/workingSchdual":"listItem",
    "/services/LeaveRequest":"listItem",
    "/services/showLeaveRequests":"listItem",
  }

  useEffect(() => {
   let interval = setInterval(()=>{markActiveRout();},100)
   return ()=> clearInterval(interval)
  },[]);

  const markActiveRout = ()=>{
    for (let i in activeRoutsMap){
      if(i===router.asPath){
        activeRoutsMap[i]="listItem active";
      }else{
        activeRoutsMap[i]="listItem";
      }
    }
    setClasses(()=>activeRoutsMap)
  }

  return (
    <div className="servicesSidebar">
      <div className="servicesSidebar_employee">
        <h3>Employee services</h3>

        <ul>
          <Link href="workingSchdual">
              <li className={classes["/services/workingSchdual"]}>Working Schdual</li>
          </Link>
          <Link href="LeaveRequest">
              <li className={classes["/services/LeaveRequest"]}>Leave Request</li>
          </Link>
        </ul>
      </div>


 { rank === "topManagement" &&
      <div style={{marginTop:"30px"}}>
        <h3>Manager section</h3>
        <Link href="showLeaveRequests">
            <li className={classes["/services/showLeaveRequests"]}>Show Leave Requests</li>
        </Link>
        <Link href="viewEmployees">
            <li className={classes["/services/viewEmployees"]}>View Employees</li>
        </Link>
      </div>}

    </div>
  );
};

export default SideBar;
