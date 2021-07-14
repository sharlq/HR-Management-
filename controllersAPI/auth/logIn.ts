import cookie from "cookie";
import jwt from "jsonwebtoken";
import user from "../../Model/user";

let JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

type userData = {
  _id: any;
  name: string;
  password: string;
  email: string;
};
type findUser = userData|false
export const setCookieWithJWT = (req,res,userInfo)=>{
    const claims = {
        id: userInfo._id,
        name: userInfo.name,
      };

      const token = jwt.sign(claims, JWT_SECRET, { expiresIn: "7d" });
      res.setHeader(
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
}

export const getUserDataFromDB:(req: any, res: any, data: any) => Promise<findUser> = async(req,res,data)=>{
let val =  await user.findOne({ name: data.name }, (err, result:userData) => {
    if (!err && result) {
     return result;
    } else {
      res.json({ authToken: false });
      return false
    }
  });
return val
}