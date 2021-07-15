import { signupNewAccount } from "../../../controllersAPI/signUp/signUp";

export default async (req, res) => {


  if (req.method === "POST") {
      signupNewAccount(req,res);

  }

  
};

