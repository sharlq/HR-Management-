import user from "../../Model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
type userData = {
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
        const claims = {
          email: dat._id,
        };
        const token = jwt.sign(claims, JWT_SECRET,{expiresIn:"2d"});
        res.json({ authToken: token });
      } else {
        console.log("dead");
      }
    });
    if (theUser) {
      bcrypt.compare(data.password, theUser.password, (err, result) => {
        if (result) {
          console.log("we got'em");
        } else {
          console.log("shit he is a fraud");
        }
      });
    } else {
      console.log("theUser is a ghost");
    }
  }
};
