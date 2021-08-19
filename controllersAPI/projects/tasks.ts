import type { NextApiRequest, NextApiResponse } from 'next'
import project from '../../Model/project'

export const deleteTask = (req:NextApiRequest,res:NextApiResponse)=>{
    let taskInfo ={
        taskId : req.query.id,
        taskProjectId :req.query.project,
        catigory : req.query.catigory}

       project.findOne({_id:taskInfo.taskProjectId},(err,projectData)=>{
           if(!err && projectData){
            deleteTaskFromCatigory(taskInfo,projectData)
           }
       })
      res.send("task deleted") 
}

const deleteTaskFromCatigory = async(taskInfo,projectData) =>{
    let newTask = projectData[`${taskInfo.catigory}`].filter((i)=>  i._id!=taskInfo.taskId)
    let mapCtigories ={
        toDo:{toDo:newTask},
        done:{done:newTask},
        doing:{doing:newTask}
    }
    await project.updateOne({_id:taskInfo.taskProjectId},mapCtigories[`${taskInfo.catigory}`])
}