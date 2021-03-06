import type { NextApiRequest, NextApiResponse } from 'next'
import leave from "../../Model/leaveForm";

export const createLeaveRequest = (req:NextApiRequest,res:NextApiResponse) =>{
  let data = req.body;
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