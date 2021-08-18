import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { selectProjects } from '../../redux/features/projectsSlice'
import { useRouter } from 'next/router'
import axios from 'axios'
import SideBar from '../../components/projects/v2/SideBar'
import Projects from '../../components/projects/v2/projectsv2'
import PopUpAddProject from '../../components/projects/PopUpAddProject'
import PopUpAddTask from '../../components/projects/popUpAddTask'
/*
export const getStaticPaths = async() =>{
    const DOMAIN = process.env.DOMAIN || 'http://localhost:3000'
    const response = await axios.get(`${DOMAIN}/api/projects/projects`)
    const projects= await response.data 
    console.log(response, " why")
    const paths = projects.map(project=>{
        return{
            params:{id: project._id}
        }
    })
    return {
        paths,
        fallback:false
    }
}
*/
const singleProject = () => {
    const router = useRouter();
    const {projectId} = router.query;
     console.log(projectId)
     const [trigger, setTrigger] = useState(false);

     const handleAddProject = () => {
       setTrigger((prev) => !prev);
     };
    return (
        <div>
    <div className="projectsPage">

<div className="mainContent">
  <SideBar handleTrigger={handleAddProject} />
  <Projects />
</div>

<PopUpAddProject handleTrigger={handleAddProject} trigger={trigger} />
<PopUpAddTask />

</div>    
        </div>
    )
}

export default singleProject
