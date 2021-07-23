import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";

type claims = {
  id:string,
  name:string
}

export const verifyUser = (req:NextApiRequest,res:NextApiResponse) =>{
    let SECRET = process.env.REACT_APP_JWT_SECRET;
    let cookies = req.cookies;

    
    jwt.verify(cookies.auth, SECRET, (err, decoded:claims) => {

      if (decoded) {
        res.json({ verified: true, name: decoded.name });
      } else {
        res.json({ verified: false });
      }

    });
}