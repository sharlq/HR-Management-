import React, { useEffect } from "react";
import Tasks from "./tasks";
import { useSelector } from "react-redux";
import { selectProjects } from "../../../redux/features/projectsSlice";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useRouter } from 'next/router';
import Team from "./team";

const Projects: React.FC = () => {

  const projects = useSelector(selectProjects);
  const router = useRouter();
  const {projectId} = router.query;
  const project = projects.filter(project=>project._id===projectId)

  const handleDeleteProject = () => {
    axios.delete(`/api/projects/projects?projectId=${project[0]._id}`);
    window.location.reload();
  };
 
  const addToTeam= async() =>{
   let res = await axios.get('/api/users/users')
     await console.log(res)
    await console.log("pressed")
  }

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

          <Team project={project[0]}/>
      
    </div>
  );
};

export default Projects;
