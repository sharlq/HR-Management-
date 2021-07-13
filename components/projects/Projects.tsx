import React, { useEffect } from "react";
import Tasks from "./tasks";
import { useSelector } from "react-redux";
import { selectSelectedProject } from "../../redux/features/projectsSlice";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

const Projects: React.FC = () => {

  const project = useSelector(selectSelectedProject);

  const handleDeleteProject = () => {
    axios.delete(`http://localhost:3000/api/projects/projects?projectId=${project._id}`);
    window.location.reload();
  };

  return (
    <div className="projects">

      <div>

        {project ? (
          <div className="projects-title">
            <h3>{project.projectName}</h3>
            <ClearIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteProject()}
            />
          </div>
        ) : (
          <h3>Project Name</h3>
        )}

        <div className="projects-workflow">
          <Tasks title={"To Do"} />
          <Tasks title={"Doing"} />
          <Tasks title={"Done"} />
        </div>

      </div>

      <div className="projects-team">
        <div className="projects-team_header">
          <h4>Project Team</h4>
          <AddIcon />
        </div>
        team member1, team member2
      </div>
      
    </div>
  );
};

export default Projects;
