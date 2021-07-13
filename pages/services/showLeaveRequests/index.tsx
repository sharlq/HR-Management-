import React from "react";
import SideBar from "../../../components/services/SideBar";
import ShowLeaveRequests from "../../../components/services/ShowLeaveRequests";
import { useVerify } from "../../../components/customHooks/useVerify";
const Index = () => {
  useVerify();
  return (
    <div className="mainContent">
      <SideBar />
      <ShowLeaveRequests />
    </div>
  );
};

export default Index;
