import React,{useEffect} from "react";
import Tasks from "./tasks";
import Task from "./Task";
const Projects = () => {

  return (
    <div className="projects">
      <h3>Project Name</h3>
      <div className="projects-workflow">
        <Tasks title={"To Do"}>
          <Task
            title="kill them"
            description="we need to kill all people in the world humanity must be anaialated"
            team="people"
          />
          <Task
            title="kill them"
            description="we need to kill all people in the world humanity must be anaialated"
            team="people"
          />
        </Tasks>
        <Tasks title={"Doing"}>
          <Task
            title="kill them"
            description="we need to kill all people in the world humanity must be anaialated"
            team="people"
          />
        </Tasks>
        <Tasks title={"Done"} />
      </div>
    </div>
  );
};

export default Projects;
