import cookie from "cookie";
import jwt from "jsonwebtoken";
import user from "../../Model/user";
import bcrypt from "bcrypt";

let JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

type userData = {
  _id: any;
  name: string;
  password: string;
  email: string;
};
type findUser = userData | false|null;

export const login = async (req, res) => {
  let data = req.body;
  let theUser: Promise<findUser> = getUserDataFromDB(req, res, data);
  let userInfo: findUser = await theUser;
  

  if (userInfo) {
    bcrypt.compare(data.password, userInfo.password, (err, result) => {
      if (!err && result) {
        setCookieWithJWT(req, res, userInfo);
      }else{
        res.json({ authToken: false });
      }
    });

  } else{
    res.json({ authToken: false });
  }
  
};

const getUserDataFromDB: (req: any, res: any, data: any) => Promise<findUser> =
  async (req, res, data) => {
    let val = await user.findOne(
      { name: data.name },
      (err, result: userData) => {
        if (!err && result) {
          return result;
        } else {
          return false;
        }
      }
    );
    return val;
  };



const setCookieWithJWT = (req, res, userInfo) => {
  const claims = {
    id: userInfo._id,
    name: userInfo.name,
  };

  const token = jwt.sign(claims, JWT_SECRET, { expiresIn: "7d" });
  res
    .setHeader(
      "set-cookie",
      cookie.serialize("auth", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3600 * 24 * 7,
        path: "/",
      })
    )
    .json({ authToken: true });
};
