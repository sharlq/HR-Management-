import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
import user from "../../Model/user";

type claims = {
  id:string,
  name:string
}

export const getEmployeeRank = (req:NextApiRequest,res:NextApiResponse) =>{

    let SECRET = process.env.REACT_APP_JWT_SECRET;
    let cookie = req.cookies;

    jwt.verify(cookie.auth, SECRET, (err, decoded:claims) => {
      user.findOne({ name: decoded.name }, (err, info) => {
        if (!err && info) {
          res.status(200).send(info.rank);
        }
      });
    });
}