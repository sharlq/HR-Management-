import React from 'react'
import TextField from "@material-ui/core/TextField";


import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Skill from './subComponents/skill'
const Bottom = () => {
    return (
        <div className="profile-bottom ">
        <div className="profile-bottom_skills">
          <h3 className="title">Skills</h3>
          <div className="skills-paper">
            <InputBase
              placeholder="Add skill"
            />
            <Divider orientation="horizontal"/>
            <div className="skills-list">
              <Skill />
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
    )
}

export default Bottom
