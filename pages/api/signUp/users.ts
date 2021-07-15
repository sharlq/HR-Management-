import { doseNameOrEmailUsed,createNewAccount } from "../../../controllersAPI/signUp/signUp";

export default async (req, res) => {


  if (req.method === "POST") {

    let data = req.body;
    const [checkName,checkEmail] = await doseNameOrEmailUsed(data)

    if (!checkName && !checkEmail) {

      createNewAccount(res,data)
    
    } else if (checkName) {
      res.status(200).send("this user name is already used");
    } else if (checkEmail) {
      res.status(200).send("this email is already used");
    }

  }

  
};

