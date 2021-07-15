import jwt from "jsonwebtoken";
import user from "../../../Model/user";
import { updateProfile } from "../../../controllersAPI/profile/updateProfile";
export default (req, res) => {
  //there is a problem with the adding skills both in term of ui and adding new skills

  if (req.method === "POST") {

    updateProfile(req, res)
   
  }
};
