import React, { useState, useEffect, useMemo } from "react";
import Link from "next/Link";
import { useSelector } from "react-redux";
import { selectRank } from "../../redux/features/userSlice";
import { useRouter } from "next/router";

const SideBar = () => {

  const [stampClass, setStampClass] = useState({
    workingSchdual: "stamp active",
    leaveRequest: "stamp",
    showLeaveRequests: "stamp",
  });
  const [isManager, setIsManager] = useState(false);
  const [managerSectionClass, setManagerSectionClass] = useState("dontDisplay");
  
  const rank = useSelector(selectRank);

  const router = useRouter();

  const verifyManagerStatus = () => {
    if (rank == "topManagement") setIsManager(true);
    if (isManager) setManagerSectionClass("servicesSidebar_manager");
  };


  const setStampForSelectedPage = (servicePageName) => {
     const stampClassProperties = [
      "workingSchdual",
      "leaveRequest",
      "showLeaveRequests",
    ];
    let tempToSetStampClasses = {
      workingSchdual: "stamp",
      leaveRequest: "stamp",
      showLeaveRequests: "stamp",
    };

    for (let i = 0; i < stampClassProperties.length; i++) {
      if (servicePageName === stampClassProperties[i]) {
        tempToSetStampClasses[stampClassProperties[i]] = "stamp active";
      } else {
        tempToSetStampClasses[stampClassProperties[i]] = "stamp";
      }
    }

    setStampClass(tempToSetStampClasses);
  };


  useEffect(() => {
    verifyManagerStatus();
    console.log(router.query);
  });


  return (
    <div className="servicesSidebar">

      <div className="servicesSidebar_employee">

        <h3>Employee services</h3>

        <ul>
          <div
            className="listItem"
            onClick={() => setStampForSelectedPage("workingSchdual")}
          >
            <div className={stampClass.workingSchdual} />
            <li>Working Schdual</li>
          </div>
          <div
            className="listItem"
            onClick={() => setStampForSelectedPage("leaveRequest")}
          >
            <div className={stampClass.leaveRequest} />
            <li>Leave Request</li>
          </div>
        </ul>

      </div>

      <div className={managerSectionClass}>
        <h3>Manager section</h3>
        
        <Link href="services/showLeaveRequests">
          <div
            className="listItem"
            onClick={() => setStampForSelectedPage("showLeaveRequests")}
          >
            <div className={stampClass.showLeaveRequests} />
            <li>Show Leave Requests</li>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default SideBar;
