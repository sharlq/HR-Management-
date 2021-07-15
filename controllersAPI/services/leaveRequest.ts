import leave from "../../Model/leaveForm";

export const createLeaveRequest = (res,data) =>{
    leave.create(data, (err, data) => {
        if (err) {
          res.send(err);
        } else if (data) {
          res.status(200).send("leave request waiting approval");
        }
      });
}

export const getAllLeaveRequests = (res) =>{
    leave.find({}, (err, result) => {
        res.send(result);
      });
}