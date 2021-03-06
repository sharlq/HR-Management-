import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { selectSelectedProject } from "../../redux/features/projectsSlice";

const Task: React.FC<{
  title: string;
  description: string;
  team: string;
  id: string;
  catigory: string;
  handleDeleteTask: any;
}> = ({ title, description, team, id, catigory, handleDeleteTask }) => {
  
  let project = useSelector(selectSelectedProject);
  let dispatch = useDispatch();

  const handleDelete = async () => {
    axios.delete(
      `/api/projects/tasks?id=${id}&project=${project._id}&catigory=${catigory}`
    );
    handleDeleteTask(id, catigory);
    dispatch({type:"UPDATE_TASKS"})
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
