import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const Profile = () => {
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
          className="position-text"
          id="outlined-basic"
          label="Designation"
          variant="outlined"
        />
        <TextField
          className="position-text"
          id="outlined-basic"
          label="Department"
          variant="outlined"
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
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
