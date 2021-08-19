import { addTeamMember } from "../../../controllersAPI/projects/team";

export default async (req, res) => {
  if (req.method === "PUT") {
    addTeamMember(req,res);
  }
};
