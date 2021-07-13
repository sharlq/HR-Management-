import React, { useState, useEffect } from "react";
import RequestForm from "./RequestForm";
import axios from "axios";
const ShowLeaveRequests = () => {

  const [requests, setRequests] = useState<any>();

  const fetchRequests = async () => {
    let response = await axios.get("http://localhost:3000/api/services/leaveRequest");
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
            name={i.naem}
            department={i.department}
            days={i.numberOfDays}
            leaveType={i.leaveType}
            reasonOfLeave={i.reasonOfLeave}
            informedManager={true}
          />
        ))}
        
    </div>
  );
};

export default ShowLeaveRequests;
