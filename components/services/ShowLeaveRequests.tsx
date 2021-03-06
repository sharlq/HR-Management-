import React, { useState, useEffect } from "react";
import RequestForm from "./RequestForm";
import axios from "axios";
const ShowLeaveRequests = () => {

  const [requests, setRequests] = useState<any>();

  const fetchRequests = async () => {
    let response = await axios.get("/api/services/leaveRequest");
    setRequests(response.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  
  return (
    <div className="leavCardsContainer">

      {requests &&
        requests.map((i) => (
          <RequestForm
            name={i.name}
            department={i.department}
            days={i.numberOfDays}
            leaveType={i.leaveType}
            reasonOfLeave={i.reason}
            informedManager={i.informedManager}
          />
        ))}
        
    </div>
  );
};

export default ShowLeaveRequests;
