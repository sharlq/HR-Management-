import project from '../../../Model/project'
import { DeleteTask } from '../../../controllersAPI/projects/tasks';

export default (req,res) => {

    if(req.method==="DELETE"){
        let taskInfo ={
         taskId : req.query.id,
         taskProjectId :req.query.project,
         catigory : req.query.catigory}

        project.findOne({_id:taskInfo.taskProjectId},async(err,projectData)=>{
            if(!err && projectData){
             DeleteTask(taskInfo,projectData)
            }
        })
        
    }

}