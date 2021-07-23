import type { NextApiRequest, NextApiResponse } from 'next'
import user from "../../Model/user";
import bcrypt from "bcrypt";

export const signupNewAccount = async(req:NextApiRequest,res:NextApiResponse)=>{
  let data = req.body;
  const [checkName,checkEmail] = await doseNameOrEmailUsed(data)

  if (!checkName && !checkEmail) {

    createNewAccount(res,data)
  
  } else if (checkName) {
    res.status(200).send("this user name is already used");
  } else if (checkEmail) {
    res.status(200).send("this email is already used");
  }
};


const doseNameOrEmailUsed = async(data)=>{
    let checkName = false;
    let checkEmail = false;

    await user.findOne({ name: data.name }, (err, dat) => {
      if (dat) checkName = true;
    });

    await user.findOne({ email: data.email },(err, dat) => {
      if (dat) checkEmail = true;
    });

    return [checkName,checkEmail]
};

const createNewAccount = (res,data) =>{
    bcrypt.hash(data.password, 10,  (err, hash)=> {
        user.create({
          name: data.name,
          email: data.email,
          password: hash,
          rank: "normal",
        });
      });

      res.status(201).send("Account created successfully");
};