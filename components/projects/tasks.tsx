import React, { useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSelectedProject,
  triggerAddTaskPopUp,
  getTaskCatigory,
  getSelectedProject,
} from "../../redux/features/projectsSlice";
import Task from "./Task";

type projectObj = {
  _id: string;
  projectName: string;
  projectDepartment: string;
  projectManager: string;
  team: [string];
  toDo: [];
  doing: [];
  done: [];
};

const tasks: React.FC<{ title: string; children?: any }> = ({
  title,
  children,
}) => {

  const project: projectObj | null = useSelector(selectSelectedProject);
  const dispatch = useDispatch();

  const handlePopUpAddTask = () => {
    dispatch(getTaskCatigory(catigory));
    dispatch(triggerAddTaskPopUp({}));
  };
  const handleDeleteTask = (taskId, projectCatigory) => {
    let filteredTasks = project[`${projectCatigory}`].filter(
      (i) => i._id != taskId
    );
    let dummyProject = { ...project };
    dummyProject[`${projectCatigory}`] = filteredTasks;
    dispatch(getSelectedProject(dummyProject));
  };

  //consider adding this to didMount use effect and put it inside a function so its name expalins it 
  let catigory;
  if (project) {
    if (title === "To Do") {
      catigory = "toDo";
    } else if (title === "Doing") {
      catigory = "doing";
    } else if (title === "Done") {
      catigory = "done";
    }
  }

  return (
    <div className="tasksContainer">
      <div className="tasksContainer-title">
        <h4>{title}</h4>
        <AddCircleIcon
          style={{ cursor: "pointer" }}
          onClick={() => handlePopUpAddTask()}
        />
      </div>
      {project &&
        project[`${catigory}`].map((card) => (
          <Task
            catigory={catigory}
            id={card._id}
            title={card.title}
            description={card.description}
            team={card.team}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
    </div>
  );
};

export default tasks;
