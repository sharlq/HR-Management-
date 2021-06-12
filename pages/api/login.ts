import user from "../../Model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
type userData = {
    _id:any,
  name: string;
  password: string;
  email: string;
};
let JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
export default async (req, res) => {
  if (req.method === "POST") {
    let data = req.body;
    let theUser: userData | null = null;
    await user.findOne({ name: data.name }, (err, dat) => {
      if (!err && dat) {
        theUser=dat
      } else {
        res.json({authToken:false})
      }
    });
    if (theUser) {
      bcrypt.compare(data.password, theUser.password, (err, result) => {
        if (result) {
            const claims = {
                id: theUser._id,
                name:theUser.name
              };
            const token = jwt.sign(claims, JWT_SECRET,{expiresIn:"2d"});
            res.json({ authToken: token });
        } else {
            res.json({authToken:false})
        }
      });
    } else {
        res.json({authToken:false})
    }
  }
};
