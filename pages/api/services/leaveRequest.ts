import { createLeaveRequest,getAllLeaveRequests } from "../../../controllersAPI/services/leaveRequest";

export default (req, res) => {


  if (req.method === "POST") {
    let data = req.body;
    createLeaveRequest(res,data)
  } else if (req.method === "GET") {
    getAllLeaveRequests(res)
  }


};
