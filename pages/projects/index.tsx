import React, { useState, useEffect } from "react";
import Projects from "../../components/projects/Projects";
import SideBar from "../../components/projects/SideBar";
import PopUpAddProject from "../../components/projects/PopUpAddProject";
import { useDispatch } from "react-redux";
import PopUpAddTask from "../../components/projects/popUpAddTask";
const Index = () => {

  const [trigger, setTrigger] = useState(false);

  const handleAddProject = () => {
    setTrigger((prev) => !prev);
  };

  return (
    <div className="projectsPage">

      <div className="mainContent">
        <SideBar handleTrigger={handleAddProject} />
        <Projects />
      </div>

      <PopUpAddProject handleTrigger={handleAddProject} trigger={trigger} />
      <PopUpAddTask />
      
    </div>
  );
};

export default Index;
