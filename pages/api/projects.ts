import jwt from "jsonwebtoken";
import project from "../../Model/project";
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
  }
  if (req.method === "GET") {
    let cookies = req.cookies;
    jwt.verify(cookies.auth, SECRET, (err, decoded) => {
      if (!err && decoded) {
        project.find({}, (err, docs) => {
          let usersProjects = docs.filter((i) => i.team.includes(decoded.name));
          res.send(usersProjects);
        });
      }
    });
  }
  if (req.method === "PUT") {
    let data = req.body;
    let task = {
      title: data.TaskName,
      description: data.TaskDescription,
      team: data.TaskTeam,
    };

    if (data.catigory === "toDo") {
      console.log("HAIL SHEHAB");
      project.findOne({ _id: data.projectId }, async (err, result) => {
        if (!err && result) {
          let array = result.toDo.concat(task);
          await project.updateOne({ _id: data.projectId }, { toDo: array });
        }else{
            res.send("the project doseent exist")
        }
      });
    }else if(data.catigory === "doing"){
        project.findOne({ _id: data.projectId }, async (err, result) => {
            if (!err && result) {
              let array = result.doing.concat(task);
              await project.updateOne({ _id: data.projectId }, { doing: array });
            }else{
                res.send("the project doseent exist")
            }
          });
    }else if(data.catigory === "done"){
        project.findOne({ _id: data.projectId }, async (err, result) => {
            if (!err && result) {
              let array = result.done.concat(task);
              await project.updateOne({ _id: data.projectId }, { done: array });
            }else{
                res.send("the project doseent exist")
            }
          });
    }
  }
};
