import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSelectedProject,
  triggerAddTaskPopUp,
  getTaskCatigory,
  getSelectedProject,
  selectProjects,
} from "../../../redux/features/projectsSlice";
import Task from "./Task";
import { useRouter } from "next/router";

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
}) => {
  const projects = useSelector(selectProjects);
  const router = useRouter();
  const {projectId} = router.query;
  const projectArray = projects.filter(project=>project._id===projectId)
  const project:projectObj = projectArray[0];

  const dispatch = useDispatch();

  const handlePopUpAddTask = () => {
    dispatch(getTaskCatigory(catigory));
    dispatch(triggerAddTaskPopUp({}));
  };


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
          />
        ))}
    </div>
  );
};

export default tasks;
