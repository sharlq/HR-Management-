import {login} from "../../../controllersAPI/auth/logIn";


export default async (req, res) => {
  if (req.method === "POST") {
    login(req,res)
  }
};
