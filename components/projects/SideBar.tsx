import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import {useSelector} from 'react-redux'
import {selectProjects} from '../../redux/features/projectsSlice'
import {useDispatch} from 'react-redux'
import  {getSelectedProject} from '../../redux/features/projectsSlice' 

const SideBar: React.FC<{
  handleTrigger: any;
}> = ({ handleTrigger }) => {
  const [classTheStamp, setClassTheStamp] = useState<{}>();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects)
  console.log(projects,"hmm")
  let stampClasses = {};

  if (projects) {
    for (let i = 0; i < projects.length; i++) {
      stampClasses[`${projects[i]._id}`] = "stamp";
    }
  }

  const handleChoseProject = (id) => {
    for (let i in stampClasses) {
      if (id === i) {
        stampClasses[i] = "stamp active";
      } else {
        stampClasses[i] = "stamp";
      }
    }
    let theChosenOne = projects.filter((i) => i._id === id);
    dispatch(getSelectedProject(theChosenOne[0]));
    setClassTheStamp(stampClasses);
    console.log(id,theChosenOne[0])
  };


  useEffect(() => {
    setClassTheStamp(stampClasses);
  }, [projects]);


  return (
    <aside className="projectsSide">
      <div className="projectsSide-title">
        <h2>Projects </h2>{" "}
        <AddIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleTrigger()}
        />
      </div>
      <ul>
        {
          classTheStamp && projects &&
          projects.map((i) => (
            <div key={`container ${i._id}`}
              className="singleProject"
              onClick={() => handleChoseProject(i._id)}
            >
              <div key={`stamp ${i._id}`}
                className={classTheStamp[`${i._id}`]}
                
              />
              <li
              key={`item ${i._id}`}             
             className="chosen">{i.projectName}</li>
            </div>
          ))}
      </ul>
    </aside>
  );
};

export default SideBar;
