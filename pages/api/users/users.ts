import type { NextApiRequest, NextApiResponse } from "next";
import user from "../../../Model/user";
import { getUsers } from "../../../controllersAPI/users/users";
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    getUsers(req, res);
  }
};
