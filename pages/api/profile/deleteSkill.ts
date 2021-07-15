import { deleteSkill } from "../../../controllersAPI/profile/deleteSkill";

export default (req, res) => {
  
  //it dosent work fix it
  if (req.method === "PATCH") {
    deleteSkill(req,res)

  }
};
