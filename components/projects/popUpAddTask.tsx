import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAddTaskTrigger,
  triggerAddTaskPopUp,
  selectTaskCatigory,
} from "../../redux/features/projectsSlice";
import { useRouter } from 'next/router';

const PopUpAddProject: React.FC<{}> = () => {
  //maybe seperate the logic
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [team, setTeam] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const trigger = useSelector(selectAddTaskTrigger);
  const catigory = useSelector(selectTaskCatigory);

  const dispatch = useDispatch();
  const router = useRouter();
  
  const {projectId} = router.query;

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
    axios.put("/api/projects/projects", {
      projectId: projectId,
      catigory: catigory,
      TaskName: name,
      TaskDescription: description,
      TaskTeam: team,
    });
  };

  const handleAddTask = async () => {
    if (name && description && team && projectId) {
      setError(false);
      setErrorMessage("");

      addTheTaskToDB();

      dispatch(triggerAddTaskPopUp({}));
      setName("");
      setDescription("");
      setTeam("");

      dispatch({type:"UPDATE_TASKS"})
    } else if (!projectId) {
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
