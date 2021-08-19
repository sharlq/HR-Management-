import type { NextApiRequest, NextApiResponse } from "next";
import user from "../../Model/user";

export const getUsers = (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  if (query.require !== "profile") {
    user.find({}, query.require, {}, (err, result) => {
      if (result && !err) {
        res.send(result);
      }
    });
  } else {
    
    const profileParameters = [
      "name",
      "email",
      "designation",
      "department",
      "aboutme",
      "reportingManager",
      "skills",
      "profileImg",
    ];

    user.find({}, profileParameters, {}, (err, result) => {
      if (result && !err) {
        res.send(result);
      }
    });
  }
};
