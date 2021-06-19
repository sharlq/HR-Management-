import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";

type projectObj = {
  _id: string;
  projectName: string;
  projectDepartment: string;
  projectManager: string;
  team: [string];
  toDo: [];
  doing: [];
  done: [];
};
const SideBar: React.FC<{
  handleTrigger: any;
  projects: [projectObj];
  setProject: any;
}> = ({ handleTrigger, projects, setProject }) => {
  const [colorTheStamp, setColorTheStamp] = useState<{}>();
  let stampColor = {};
  
    
  
  const handleChoseProject = (id) => {
    for (let i in stampColor) {
      if (id === i) {
        stampColor[i] = "royalbluegit";
      } else {
        stampColor[i] = "white";
      }
    }
    let theChosenOne = projects.filter((i) => i._id === id);
    setProject(theChosenOne);
    setColorTheStamp(stampColor);
  };
  useEffect(() => {
      if(projects){
    for (let i = 0; i < projects.length; i++) {
        stampColor[`${projects[i]._id}`] = "white";
      }
      setColorTheStamp(stampColor);}
  }, []);
  return (
    //connect teh list elements wiht the state
    <aside className="projectsSide">
      <div className="projectsSide-title">
        <h2>Projects </h2>{" "}
        <AddIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleTrigger()}
        />
      </div>
      <ul>
        {projects &&
          projects.map((i) => (
            <div
              className="singleProject"
              onClick={() => handleChoseProject(i._id)}
            >
              <div
                className="stamp" //@ts-ignore
                style={{ background: colorTheStamp[`${i._id}`] }}
              />
              <li className="chosen">{i.projectName}</li>
            </div>
          ))}
      </ul>
    </aside>
  );
};

export default SideBar;
