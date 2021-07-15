import user from "../../Model/user";
import bcrypt from "bcrypt";

export const doseNameOrEmailUsed = async(data)=>{
    let checkName = false;
    let checkEmail = false;

    await user.findOne({ name: data.name }, (err, dat) => {
      if (dat) checkName = true;
    });

    await user.findOne({ email: data.email },(err, dat) => {
      if (dat) checkEmail = true;
    });

    return [checkName,checkEmail]
}

export const createNewAccount = (res,data) =>{
    bcrypt.hash(data.password, 10,  (err, hash)=> {
        user.create({
          name: data.name,
          email: data.email,
          password: hash,
          rank: "normal",
        });
      });

      res.status(201).send("Account created successfully");
}