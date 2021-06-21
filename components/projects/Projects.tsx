import React,{useEffect} from "react";
import Tasks from "./tasks";
import Task from "./Task";

const Projects:React.FC= () => {



  return (
    <div className="projects">
      <h3>Project Name</h3>
      <div className="projects-workflow">
        <Tasks title={"To Do"}>
         
        </Tasks>
        <Tasks title={"Doing"}>
          
        </Tasks>
        <Tasks title={"Done"} />
      </div>
    </div>
  );
};

export default Projects;
