import jwt from "jsonwebtoken";

export const verifyUser = (req,res) =>{
    let SECRET = process.env.REACT_APP_JWT_SECRET;
    let cookies = req.cookies;

    
    jwt.verify(cookies.auth, SECRET, (err, decoded) => {

      if (decoded) {
        res.json({ verified: true, name: decoded.name });
      } else {
        res.json({ verified: false });
      }

    });
}