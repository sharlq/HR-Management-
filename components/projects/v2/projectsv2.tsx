import React, { useEffect } from "react";
import Tasks from "./tasks";
import { useSelector } from "react-redux";
import { selectProjects } from "../../../redux/features/projectsSlice";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useRouter } from 'next/router';

const Projects: React.FC = () => {

  const projects = useSelector(selectProjects);
  const router = useRouter();
  const {projectId} = router.query;
  const project = projects.filter(project=>project._id===projectId)

  const handleDeleteProject = () => {
    axios.delete(`/api/projects/projects?projectId=${project[0]._id}`);
    window.location.reload();
  };
 
  useEffect(()=>{
    console.log(project)
  })
  return (
    <div className="projects">

      <div>

        {project[0] ? (
          <div className="projects-title">
            <h3>{project[0].projectName}</h3>
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
