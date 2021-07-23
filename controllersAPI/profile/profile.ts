import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
import users from "../../Model/user";

type claims = {
  id:string,
  name:string
}

let SECRET = process.env.REACT_APP_JWT_SECRET;


export const fetchUserProfile = (req:NextApiRequest,res:NextApiResponse) =>{
    let cookies = req.cookies;
    try {
        jwt.verify(cookies.auth, SECRET, async(err, decoded:claims) => {
          if (decoded) {
  
           await users.findOne({ _id: decoded.id }, (err, data) => {
              res.send(data);
            });
            
          } else {
            res.send({ getOut: true });
          }
        });
      } catch(err) {
        res.send(err);
      }
}


export const updateProfile = (req,res) =>{
    let data = req.body;
    let cookies = req.cookies;


    const updateField = async(decoded,field) =>{
       
        let map = {
            designation:{ designation: data.designation },
            department: { department: data.department },
            aboutme:{ aboutme: data.aboutme },
            skills: { skills: data.skills },
            reportingManager: { reportingManager: data.reportingManager }
        }
        await users.updateOne(
            { name: decoded.name },
            map[`${field}`]
          );
    }


    jwt.verify(cookies.auth, SECRET, async (err, decoded) => {

      if (!err&&decoded) {
        for(let i in data){
        if (data[`${i}`] !== "") {
            updateField(decoded,i)
        }
        }
        
        res.json({ verified: true, name: decoded.name });
      } else {
        res.json({ verified: false });
      }

      
    });

}