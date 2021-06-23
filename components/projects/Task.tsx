import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { selectSelectedProject,getSelectedProject } from '../../redux/features/projectsSlice';
const Task:React.FC<{title:string,description:string,team:string,id:string,catigory:string,handleDeleteTask:any}> = ({title,description,team,id,catigory,handleDeleteTask}) => {
    const dispatch = useDispatch();
    let project = useSelector(selectSelectedProject)
    const handleDelete =async()=>{
  //  console.log("before delete")
    axios.delete(`http://localhost:3000/api/tasks?id=${id}&project=${project._id}&catigory=${catigory}`)
    handleDeleteTask(id,catigory)
  /* console.log("after delete")
   let refreshedProjects = await axios.get('http://localhost:3000/api/projects')
   console.log("after getting request") 
   let refreshedProject =   refreshedProjects.data.filter((i)=>i._id==project._id)
    console.log(refreshedProject[0])
    console.log('after getting the new project')
    dispatch(getSelectedProject(refreshedProject[0]))
    //the problem that we cant use useSelector inside the function
    //and if we add await for the delete it will note exixute the code after it
    //another problem is that the function dosent change with the dispatch
    project =  useSelector(selectSelectedProject)
    console.log('after dispatching',project)*/
    }
    return (
        <div className="task">
            <div className="task-header">
            <h4 className="task-title">{title}</h4>
            <ClearIcon style={{cursor:'pointer'}} onClick={()=>handleDelete()}/>
            </div>
            <p className="task-description">{description}</p>
            <div className="task-team">{team}</div>
        </div>
    )
}

export default Task
