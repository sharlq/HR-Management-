import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import {Clear} from '@material-ui/icons';
const Profile = () => {
  let text = "photographer designer";
  return (
    <div className="profile">
      <div className="avatarSection">
        <div className="avatarSection-imageContainer">
          <img
            className="image"
            src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg"
          ></img>
        </div>
        <Button className="button" variant="contained" color="primary">
          Upload new picture
        </Button>
        <Button className="button" variant="contained" color="secondary">
          Delete image
        </Button>
      </div>
      <div className="position">
        <h3 className="title">Position</h3>
        <TextField
          autoComplete="sex"
          className="position-text"
          id="outlined-basic"
          label="Designation"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className="position-text"
          id="outlined-basic"
          label="Department"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="aboutMe">
        <h3 className="title">About Me</h3>
        <TextField
          className="aboutMe-text"
          label="About Me"
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline={true}
          rows="7"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="profile-bottom ">
        <div className="profile-bottom_skills">
          <h3 className="title">Skills</h3>
          <div className="skills-paper">
            <InputBase
              placeholder="Add skill"
            />
            <Divider orientation="horizontal"/>
            <div className="skills-list">
              <div className="skill">
                skill
                <div className="skill-taile">
                <div className="divider"/>
                <Clear/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-bottom_manager">
          <h3 className="title">Reporting Manager</h3>
          <TextField
            className="position-text"
            id="outlined-basic"
            label="Reporting Maneger"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
