import project from '../../Model/project'
export default (req,res) => {
    if(req.method==="DELETE"){
        let taskId = req.query.id;
        let projectId =req.query.project;
        let catigory = req.query.catigory
        
        console.log(taskId, projectId,catigory)
        project.findOne({_id:projectId},async(err,projectData)=>{
            if(!err && projectData){
                
                if(catigory==="toDo"){
                    let newToDo = projectData.toDo.filter((i)=>  i._id!=taskId)
                    await project.updateOne({_id:projectId},{toDo:newToDo})
                }else if(catigory==="doing"){
                    let newDoing = projectData.doing.filter((i)=>i._id!=taskId)
                    await project.updateOne({_id:projectId},{doing:newDoing})
                }else if(catigory==="done"){
                    let newDone = projectData.done.filter((i)=>i._id!=taskId)
                    await project.updateOne({_id:projectId},{done:newDone})
                }
            }
        })
    }
}