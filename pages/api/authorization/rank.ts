import { getEmployeeRank } from "../../../controllersAPI/auth/rank";

export default (req, res) => {

  if (req.method === "GET") {
    getEmployeeRank(req,res)
  }
  
};
