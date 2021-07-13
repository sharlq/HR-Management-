import React from "react";
import LeaveRequest from "../../components/services/LeaveRequest";
import SideBar from "../../components/services/SideBar";
import { useVerify } from "../../components/customHooks/useVerify";
const Index = () => {
  useVerify();
  return (
    <div className="mainContent">
      <SideBar />
      <LeaveRequest />
    </div>
  );
};

export default Index;
