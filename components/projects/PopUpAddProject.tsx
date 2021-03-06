import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

const PopUpAddProject: React.FC<{ trigger: boolean; handleTrigger: any }> = ({
  trigger,
  handleTrigger,
}) => {
  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [manager, setManager] = useState<string>("");
  //  const [team,setTeam]=useState<string>()
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  let opacity: string, visibility: "visible" | "hidden";

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

  const handleAddProject = async () => {
    if (name && department && manager) {
      setError(false);
      setErrorMessage("");

      axios.post("/api/projects/projects", {
        projectName: name,
        projectDepartment: department,
        projectManager: manager,
      });

      handleTrigger();
      window.location.reload();
    } else {
      setError(true);
      setErrorMessage("fill all the fields");
    }
  };

  return (
    <div
      className="popUp"
      style={{ visibility: visibility, opacity: opacity }}
      onClick={() => handleTrigger()}
    >
      <div
        className="popUp-form"
        style={{ visibility: visibility, opacity: opacity }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Create new Project</h2>

        {error && <Alert severity="error">{errorMessage}</Alert>}

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
        />
        <TextField
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Project Department"
          variant="outlined"
        />
        <TextField
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          className="popUp-form_input"
          id="outlined-basic"
          label="Project Manager"
          variant="outlined"
        />
        {/* <TextField value={team} onChange={(e)=>setTeam(e.target.value)} className="popUp-form_input" id="outlined-basic" label="Project Team" variant="outlined" /> */}

        <Button
          variant="contained"
          color="primary"
          className="popUp-form_button"
          onClick={() => handleAddProject()}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default PopUpAddProject;
