import type { NextApiRequest, NextApiResponse } from 'next'
import users from "../../Model/user";
import jwt from "jsonwebtoken";


type claims = {
  id:string,
  name:string
}

export const deleteSkill =(req:NextApiRequest,res:NextApiResponse) =>{
    const SECRET = process.env.REACT_APP_JWT_SECRET;
    let cookies = req.cookies;
    let data = req.body;
    console.log(data)
    jwt.verify(cookies.auth, SECRET, (err, decoded:claims) => {

        if (!err && decoded) {
  
          users.findOne({ _id: decoded.id }, async (err, result) => {

            if (!err && result) {
              
              delete result.skills[data.identifire]
              let updatedSkills = result.skills;
              await users.updateOne(
                { _id: decoded.id },
                { skills: updatedSkills }
              );
              res.send("skill deleted");
  
            }
          });
        
        }
      
      
      });
  
}