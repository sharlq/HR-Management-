import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { selectProjects } from "../../../redux/features/projectsSlice";
import { useRouter } from "next/router";
import { CollectionsOutlined } from "@material-ui/icons";

const Task: React.FC<{
  title: string;
  description: string;
  team: string;
  id: string;
  catigory: string;
}> = ({ title, description, team, id, catigory}) => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const {projectId} = router.query;

  const handleDelete = async () => {
    await axios.delete(
      `/api/projects/tasks?id=${id}&project=${projectId}&catigory=${catigory}`
    );
   await  dispatch({type:"UPDATE_TASKS"})
   await  dispatch({type:"UPDATE_TASKS"})
  };

  return (
    <div className="task">

      <div className="task-header">
        <h4 className="task-title">{title}</h4>
        <ClearIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete()}
        />
      </div>

      <p className="task-description">{description}</p>
      <div className="task-team">team: {team}</div>

    </div>
  );
};

export default Task;
