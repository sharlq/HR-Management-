import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Skill from "./subComponents/skill";

const Bottom: React.FC<{ skills: string[]; reportingManager: string }> = ({
  skills = [],
  reportingManager,
}) => {
  let backGroundcolors = [
    "royalblue",
    "#27bb8b",
    "#03a9f4",
    "#ffc107",
    "#009688",
    "#607d8b",
    "#ff5722",
    "#e91e63",
  ];
  
  return (
    <div className="profile-bottom ">
      <div className="profile-bottom_skills">
        <h3 className="title">Skills</h3>
        <div className="skills-paper">
          <div className="skills-list">
            {skills &&
              skills.map((i, index) => (
                <Skill
                  background={
                    backGroundcolors[
                      Math.round(
                        Math.random() * backGroundcolors.length * 10 * index
                      ) % backGroundcolors.length
                    ]
                  }
                  skill={i.trim()}
                  index={index}
                  array={skills}
                />
              ))}
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
          value={reportingManager}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

export default Bottom;
