import jwt from "jsonwebtoken";
import user from "../../Model/user";
export default (req, res) => {

  let SECRET = process.env.REACT_APP_JWT_SECRET;


  if (req.method === "POST") {

    let data = req.body;
    let cookies = req.cookies;

    jwt.verify(cookies.auth, SECRET, async (err, decoded) => {

      if (decoded) {

        if (data.designation !== "") {
          await user.updateOne(
            { name: decoded.name },
            { designation: data.designation },
            { upsert: true }
          );
          
        }

        if (data.department !== ""){
          await user.updateOne(
            { name: decoded.name },
            { department: data.department }
          );}

        if (data.aboutme !== ""){
          await user.updateOne(
            { name: decoded.name },
            { aboutme: data.aboutme }
          );}

        if (data.skills !== ""){
          await user.updateOne({ name: decoded.name }, { skills: data.skills });}
        
          if (data.reportingManager !== "")
          await user.updateOne(
            { name: decoded.name },
            { reportingManager: data.reportingManager }
          );

       
        res.json({ verified: true, name: decoded.name });
        
      } else {
        res.json({ verified: false });
      }
      

    });
  }
};
