import jwt from "jsonwebtoken";
import user from "../../Model/user";

let SECRET = process.env.REACT_APP_JWT_SECRET;

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

        await user.updateOne(
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

