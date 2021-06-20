import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector } from "react-redux";
import { selectSelectedProject } from "../../redux/features/projectsSlice";
import Task from './Task'
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
    const handleAddcard =()=>{
        
    }
    let cards

    if(project!=={}){
    
    if(title==="To Do"){
        //@ts-ignore
        cards = project.toDO
    }else if(title==="Doing"){
        //@ts-ignore
        cards=project.doning
    }else if(title==="Done"){
        //@ts-ignore
        cards = project.done
    }}
    return (
        <div className='tasksContainer'>
            <div className="tasksContainer-title">
            <h4>{title}</h4>
            <AddCircleIcon/>
            </div>
            {cards && cards.map((card)=> <Task title={card.title} description={card.description} team={cards.team}/>)}
        </div>
    )
}

export default tasks
