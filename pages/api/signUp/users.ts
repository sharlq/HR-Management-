// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from "../../../Model/user";
import bcrypt from "bcrypt";
export default async (req, res) => {


  if (req.method === "POST") {

    let data = req.body;
    let checkName = false;
    let checkEmail = false;

    await user.findOne({ name: data.name }, (err, dat) => {
      if (dat) checkName = true;
    });

    await user.findOne((err, dat) => {
      if (dat) checkEmail = true;
    });

    
    if (!checkName && !checkEmail) {

      bcrypt.hash(data.password, 10, function (err, hash) {
        user.create({
          name: data.name,
          email: data.email,
          password: hash,
          rank: "normal",
        });
      });

      res.status(201).send("ok");

    } else if (checkName) {
      res.status(200).send("this user name is already used");
    } else if (checkEmail) {
      res.status(200).send("this email is already used");
    }

  }

  
};

