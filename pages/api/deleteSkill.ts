import users from "../../Model/user";
import jwt from "jsonwebtoken";

export default (req, res) => {
  const SECRET = process.env.REACT_APP_JWT_SECRET;
  let cookies = req.cookies;
  let data = req.body;

  if (req.method === "PATCH") {


    jwt.verify(cookies.auth, SECRET, (err, decoded) => {

      if (!err && decoded) {

        users.findOne({ _id: decoded.id }, async (err, result) => {

          if (!err && result) {
            
            result.skills.splice(data.index, 1);
            let updatedSkills = res.skills;
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
};
