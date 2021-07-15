import project from "../../Model/project";
import jwt from "jsonwebtoken";

let SECRET = process.env.REACT_APP_JWT_SECRET;

export const addTaskToProject = (req, res) => {
  let data = req.body;
  project.findOne({ _id: data.projectId }, async (err, result) => {
    let task = {
      title: data.TaskName,
      description: data.TaskDescription,
      team: data.TaskTeam,
    };

    if (!err && result) {
      let array = result[`${data.catigory}`].concat(task);
      let mapTasksCategorys = {
        toDo: { toDo: array },
        done: { done: array },
        doing: { doing: array },
      };

      await project.updateOne(
        { _id: data.projectId },mapTasksCategorys[`${data.catigory}`]
      );

    } else {
      res.send("the project doseent exist");
    }
    res.send(data);
  });
};



export const getUserProjects = (req,res)=>{
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



export const createNewProject =(req,res) =>{
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



export const deleteProject = async(req,res) =>{
  let projectId = req.query.projectId;
  await project.deleteOne({ _id: projectId });
  res.send("project deleted");
}