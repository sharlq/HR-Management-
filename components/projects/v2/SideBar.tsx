import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import { selectProjects } from "../../../redux/features/projectsSlice";
import  Link  from 'next/link'
import { useRouter } from "next/router";

const SideBar: React.FC<{
  handleTrigger: any;
}> = ({ handleTrigger }) => {

  const [classTheStamp, setClassTheStamp] = useState<{}>();
  const [routeTrigger,setRoutTrigger] = useState<boolean>(false)
  const projects = useSelector(selectProjects);
  const router = useRouter();
  const {projectId} = router.query;


  useEffect(()=>{
    
     const interval = setInterval(()=>{
       setRoutTrigger((prev)=>!prev)
     },100)

     return ()=> clearInterval(interval)
  },[])

   useEffect(()=>{
    handleChoseProject();
   },[routeTrigger])
  



  const handleChoseProject = () => {
    let stampClasses = {};
    for (let i = 0; i < projects.length; i++) {
      if (projectId === projects[i]._id) {
        stampClasses[`${projects[i]._id}`] = "active";
      } else {
        stampClasses[`${projects[i]._id}`] = "";
      }
    }
    setClassTheStamp(()=>stampClasses);
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
            <Link href = {`/projects/${i._id}`} key={`link ${i._id}`} >
              <li key={`item ${i._id}`} className={`projectName ${classTheStamp[`${i._id}`]}`} onClick={()=>setRoutTrigger(()=>i._id)} >
                {i.projectName}
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
};

export default SideBar;
