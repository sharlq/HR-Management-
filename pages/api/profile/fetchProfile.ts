import jwt from "jsonwebtoken";
import users from "../../../Model/user";

export default (req, res) => {
  let cookies = req.cookies;
  let SECRET = process.env.REACT_APP_JWT_SECRET;

  if (req.method === "GET") {
    try {
      jwt.verify(cookies.auth, SECRET, async(err, decoded) => {
        if (decoded) {
         await users.findOne({ _id: decoded.id }, (err, data) => {
            res.send(data);
          });
        } else {
          res.send({ getOut: true });
        }
      });
    } catch {
      res.send(cookies.auth);
    }
  }
};
