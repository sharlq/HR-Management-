import { createLeaveRequest,getAllLeaveRequests } from "../../../controllersAPI/services/leaveRequest";

export default (req, res) => {


  if (req.method === "POST") {
   createLeaveRequest(req,res)
  } else if (req.method === "GET") {
    getAllLeaveRequests(res)
  }


};
