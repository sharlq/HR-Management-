import jwt from "jsonwebtoken";
import project from "../../../Model/project";
import { addTaskToProject } from "../../../controllersAPI/projects/projects";

export default async (req, res) => {
  let SECRET = process.env.REACT_APP_JWT_SECRET;

  if (req.method === "POST") {
    let data = req.body;
    let cookies = req.cookies;

    jwt.verify(cookies.auth, SECRET, (err, decoded) => {
      if (!err && decoded) {
        project.create({
          projectName: data.projectName,
          projectDepartment: data.projectDepartment,
          projectManager: data.projectManager,
          team: [decoded.name],
          toDo: [],
          doing: [],
          done: [],
        });
      } else {
        res.send("Sign In");
      }
    });
  } else if (req.method === "GET") {
    let cookies = req.cookies;

    jwt.verify(cookies.auth, SECRET, (err, decoded) => {
      if (!err && decoded) {
        project.find({}, (err, docs) => {
          let usersProjects = docs.filter((i) => i.team.includes(decoded.name));
          res.send(usersProjects);
        });
      }
    });
  } else if (req.method === "PUT") {
    let data = req.body;
    addTaskToProject(req, res, data);

  } else if (req.method === "DELETE") {
    let projectId = req.query.projectId;
    await project.deleteOne({ _id: projectId });
    res.send("project deleted");
  }
};
