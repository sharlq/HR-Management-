import React from "react";
import Projects from "../../components/projects/Projects";
import SideBar from '../../components/SideBar'
const Index = () => {
    let items =['project 1', ' project 2', 'project 3']
  return (
    <div>
      <div className="mainContent">
        <SideBar items={items} />
        <Projects />
      </div>
    </div>
  );
};

export default Index;
