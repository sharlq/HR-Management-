import { verifyUser } from "../../../controllersAPI/auth/verify";

export default (req, res) => {
  if (req.method === "GET") {
    verifyUser(req, res);
  }
};
