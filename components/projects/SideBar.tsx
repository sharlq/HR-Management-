import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import { selectProjects } from "../../redux/features/projectsSlice";
import { useDispatch } from "react-redux";
import { getSelectedProject,getProjects} from "../../redux/features/projectsSlice";
import  Link  from 'next/link'

const SideBar: React.FC<{
  handleTrigger: any;
}> = ({ handleTrigger }) => {

  const [classTheStamp, setClassTheStamp] = useState<{}>();

  const dispatch = useDispatch();
  let projects = useSelector(selectProjects);



  
  useEffect(()=>{
    initiateTempForClassStamp();
    
  },[])

  useEffect(() => {
    initiateTempForClassStamp();
  }, [projects]);
  
  const initiateTempForClassStamp = () => {
    let stampClasses = {};
    if (projects) {
      for (let i = 0; i < projects.length; i++) {
        stampClasses[`${projects[i]._id}`] = "projectName";
      }
    }
    setClassTheStamp(stampClasses);
  };

  const handleChoseProject = (id) => {
    let stampClasses = {};
    for (let i in classTheStamp) {
      if (id === i) {
        stampClasses[i] = "projectName active";
      } else {
        stampClasses[i] = "projectName ";
      }
    }
    let theChosenOne = projects.filter((i) => i._id === id);
    dispatch(getSelectedProject(theChosenOne[0]));
    setClassTheStamp(stampClasses);
  };


  return (
    <aside className="projectsSide">
      <div className="projectsSide-title">
        <h2>Projects </h2>

        <AddIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleTrigger()}
        />
      </div>

      <ul>
        {classTheStamp &&
          projects &&
          projects.map((i) => (
            <Link href = {`/projects/${i._id}`} key={`link ${i._id}`}>
              <li key={`item ${i._id}`} className={classTheStamp[`${i._id}`]} onClick={()=>handleChoseProject(i._id)}>
                {i.projectName}
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
};

export default SideBar;
