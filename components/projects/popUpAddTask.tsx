import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAddTaskTrigger,
  triggerAddTaskPopUp,
  selectSelectedProject,
  selectTaskCatigory,
  getSelectedProject,
} from "../../redux/features/projectsSlice";

const PopUpAddProject: React.FC<{}> = () => {
  //maybe seperate the logic
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [team, setTeam] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const trigger = useSelector(selectAddTaskTrigger);
  const project = useSelector(selectSelectedProject);
  const catigory = useSelector(selectTaskCatigory);

  const dispatch = useDispatch();

  let opacity: string, visibility: "visible" | "hidden" = "hidden";
  

  const popUpDownTheForm = () => {
    if (trigger) {
      visibility = "visible";
      opacity = "1";
    } else {
      visibility = "hidden";
      opacity = "0";
    }
  };
 
    popUpDownTheForm()

  const addTheTaskToDB = () => {
    axios.put("http://localhost:3000/api/projects", {
      projectId: project._id,
      catigory: catigory,
      TaskName: name,
      TaskDescription: description,
      TaskTeam: team,
    });
  };
  const updateTheCurrentUI = () => {
    let dummyProject = { ...project };
    dummyProject[`${catigory}`] = dummyProject[`${catigory}`].concat({
      _id: "dummyId",
      description,
      team,
      title: name,
    });
    dispatch(getSelectedProject(dummyProject));
  };

  const handleAddTask = async () => {
    if (name && description && team && project) {
      setError(false);
      setErrorMessage("");

      addTheTaskToDB();
      updateTheCurrentUI();

      dispatch(triggerAddTaskPopUp({}));
      setName("");
      setDescription("");
      setTeam("");
    } else if (!project) {
      setError(true);
      setErrorMessage("Select Project");
    } else {
      setError(true);
      setErrorMessage("fill all the fields");
    }
  };

  return (
    <div
      className="popUp"
      style={{ visibility: visibility, opacity: opacity }}
      onClick={() => dispatch(triggerAddTaskPopUp({}))}
    >
      <div
        className="popUp-form"
        style={{ visibility: visibility, opacity: opacity }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Create new Task</h2>

        {error && <Alert severity="error">{errorMessage}</Alert>}

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Task Name"
          variant="outlined"
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Task Description"
          variant="outlined"
        />
        <TextField
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Task Team"
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          className="popUp-form_button"
          onClick={() => handleAddTask()}
        >
          Create Task
        </Button>
      </div>
    </div>
  );
};

export default PopUpAddProject;
