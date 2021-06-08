import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from './profileComponents/Avatar'
import Position from './profileComponents/Position'
import AboutMe from './profileComponents/AboutMe'
import Bottom from './profileComponents/Bottom'
const Profile = () => {
  let text = "photographer designer";
  return (
    <div className="profile">
    <Avatar/>
    <Position /> 
    <AboutMe />
    <Bottom />   
    </div>
  );
};

export default Profile;
