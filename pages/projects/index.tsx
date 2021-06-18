import React,{useState,useEffect} from "react";
import Projects from "../../components/projects/Projects";
import SideBar from '../../components/projects/SideBar'
import PopUpAddProject from "../../components/projects/PopUpAddProject";
import axios from "axios";
const Index = () => {
  const [trigger,setTrigger] = useState(false)
  const [projects,setProjects] = useState<any>()
  const [project,setProject] = useState()
  const handleAddProject =()=>{
        setTrigger((prev)=>!prev)
  }
  const handleFetchProjects = async()=> {
    let res = await  axios.get('http://localhost:3000/api/projects')
   await setProjects(res.data)
  }
  useEffect(()=>{
    handleFetchProjects();
    console.log(projects)
  },[])
  return (
    <div className="projectsPage">
      <div className="mainContent">
        <SideBar handleTrigger={handleAddProject} projects={projects}  setProject={setProject} />
        <Projects />
      </div>
        <PopUpAddProject handleTrigger={handleAddProject} trigger={trigger} />
    </div>
  );
};

export default Index;
