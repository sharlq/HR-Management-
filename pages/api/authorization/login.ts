import bcrypt from "bcrypt";

import {
  setCookieWithJWT,
  getUserDataFromDB,
} from "../../../controllersAPI/auth/logIn";
type userData = {
  _id: any;
  name: string;
  password: string;
  email: string;
};
type findUser = userData | false;

export default async (req, res) => {
  if (req.method === "POST") {
    let data = req.body;
    let theUser: Promise<findUser> =  getUserDataFromDB(req, res, data);
    let userInfo: findUser = await theUser;

    if (userInfo) {

      bcrypt.compare(data.password, userInfo.password, (err, result) => {
        if (!err&&result) {
          setCookieWithJWT(req, res, userInfo);
        } else {
          res.json({ authToken: false });
        }
      });

    } else {
      res.json({ authToken: false });
    }
  }
};
