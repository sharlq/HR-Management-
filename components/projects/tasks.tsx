import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector,useDispatch } from "react-redux";
import { selectSelectedProject,triggerAddTaskPopUp,getTaskCatigory } from "../../redux/features/projectsSlice";
import Task from './Task'
import axios from 'axios'

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
const tasks:React.FC<{title:string,children?:any}>  = ({title,children}) => {
    
    const project:projectObj|{} = useSelector(selectSelectedProject)
    const dispatch =useDispatch()
    const handlePopUpAddTask =()=>{
        dispatch(getTaskCatigory({catigory}))
      dispatch(triggerAddTaskPopUp({}))
      console.log(catigory)
    }
    let cards
    let catigory
    if(project!=={}){
    if(title==="To Do"){
        //@ts-ignore
        cards = project.toDO
        catigory = 'toDo'
    }else if(title==="Doing"){
        //@ts-ignore
        cards=project.doning
        catigory = 'doing'
    }else if(title==="Done"){
        //@ts-ignore
        cards = project.done
        catigory = 'done'
    }}

    return (
        <div className='tasksContainer'>
            <div className="tasksContainer-title">
            <h4>{title}</h4>
            <AddCircleIcon onClick={()=>handlePopUpAddTask()}/>
            </div>
            {cards && cards.map((card)=> <Task title={card.title} description={card.description} team={cards.team}/>)}
        </div>
    )
}

export default tasks
