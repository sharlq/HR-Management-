import React,{useEffect} from "react";
import Tasks from "./tasks";
import { useSelector } from "react-redux";
import { selectSelectedProject } from "../../redux/features/projectsSlice";
import ClearIcon from '@material-ui/icons/Clear';

const Projects:React.FC= () => {
const project = useSelector(selectSelectedProject)


  return (
    <div className="projects">
      <div className="projects-title" >
      <h3>{project.projectName}</h3>

      </div>
      <div className="projects-workflow">
        <Tasks title={"To Do"}/>
        <Tasks title={"Doing"}/>
        <Tasks title={"Done"} />
      </div>
    </div>
  );
};

export default Projects;
