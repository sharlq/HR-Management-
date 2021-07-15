import project from "../../Model/project";

export const addTaskToProject = (req, res, data) => {
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
