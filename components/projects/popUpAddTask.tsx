import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useSelector,useDispatch } from 'react-redux';
import { selectAddTaskTrigger,triggerAddTaskPopUp,selectSelectedProject,selectTaskCatigory } from '../../redux/features/projectsSlice';


const PopUpAddProject:React.FC<{}> = () => {
    const [name,setName]=useState<string>()
    const [description,setDescription]=useState<string>()
    const [team,setTeam]=useState<string>()
    const [error,setError]=useState<boolean>(false)
    const [errorMessage,setErrorMessage]=useState<string>("")
    const trigger = useSelector(selectAddTaskTrigger)
    const project = useSelector(selectSelectedProject)
    const catigory = useSelector(selectTaskCatigory)
    const dispatch = useDispatch()
    let opacity:string , visibility:"visible"|"hidden"

    if(trigger){
        visibility='visible'
        opacity='1'
    } else{
        visibility='hidden'
        opacity='0'
        
    }
    

    const   handleAddTask = async()=>{
        if(name&&description&&team&&project[0]){
            setError(false)
            setErrorMessage("")
         axios.put('http://localhost:3000/api/projects',{
            projectId:project[0]._id,
            catigory:catigory,
            TaskName:name,
            TaskDescription:description,
            TaskTeam:team
        })
         dispatch(triggerAddTaskPopUp({}))
         //@ts-ignore
        }else if(!project[0]){
            setError(true)
            setErrorMessage("Select Project")
        }else{
            setError(true)
            setErrorMessage("fill all the fields")
        }
        console.log(catigory)
        console.log(project)
    }
    return (
       
           
           <div className="popUp" style={{visibility:visibility,opacity:opacity}} onClick={()=>dispatch(triggerAddTaskPopUp({}))}>
            <div  className="popUp-form" style={{visibility:visibility,opacity:opacity}} onClick={(e)=>e.stopPropagation()}>
            <h2>Create new Task</h2>
            {error && <Alert severity="error">{errorMessage}</Alert>}
            <TextField value={name} onChange={(e)=>setName(e.target.value)} className="popUp-form_input" id="outlined-basic" label="Task Name" variant="outlined" />
            <TextField value={description} onChange={(e)=>setDescription(e.target.value)} className="popUp-form_input" id="outlined-basic" label="Task Description" variant="outlined" />
            <TextField value={team} onChange={(e)=>setTeam(e.target.value)} className="popUp-form_input" id="outlined-basic" label="Task Team" variant="outlined" />
            <Button variant="contained"color="primary" className="popUp-form_button" onClick={()=>handleAddTask()} > Create Task </Button>
            </div>
        </div>
        
      
        
    )
}

export default PopUpAddProject
