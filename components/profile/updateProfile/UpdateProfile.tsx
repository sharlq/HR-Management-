import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import Link from "next/Link"

type inputState = string;

const UpdateProfile = () => {
  const [designation, setDesignation] = useState<inputState>("");
  const [department, setDepartment] = useState<inputState>("");
  const [skills, setSkills] = useState<inputState>("");
  const [reportingManager, setReportingManager] = useState<inputState>("");
  const [aboutme, setAboutme] = useState<inputState>("");

  const handleSubmit = () => {
     let skillsArray;

    if (skills !== "") {
      skillsArray = skills.split(",");
      if(skillsArray[skillsArray.length - 1]==="")skillsArray.pop();
    } else {
      skillsArray = "";
    }

    axios.post("http://localhost:3000/api/profile/profile", {
      designation: designation,
      department: department,
      aboutme: aboutme,
      skills: skillsArray,
      reportingManager: reportingManager,
    });

  };


  return (
    <div className="updateProfile">

      <h3>Udate Profile</h3>

    
     
      <form className="signup-form">
        <TextField
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="signup-input"
          label="Designation"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="signup-input"
          label="Department"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="signup-input"
          label="Skills"
          placeholder="Skill 1 ,Skill 2 ,Skill 3 ..."
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={reportingManager}
          onChange={(e) => setReportingManager(e.target.value)}
          className="signup-input"
          label="Reporting manager"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={aboutme}
          onChange={(e) => setAboutme(e.target.value)}
          style={{ gridColumn: "1/3" }}
          className="aboutMe-text"
          label="About Me"
          placeholder="tell us about yourself"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline={true}
          rows="7"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Link href="/profile" replace={true}>
        <Button
          onClick={() => handleSubmit()}
          className="signup-btn"
          variant="contained"
          color="primary"
        >
          Update Profile
        </Button>
        </Link>


      </form>

    </div>
  );
};

export default UpdateProfile;
