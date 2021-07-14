import project from '../../Model/project'

export const DeleteTask = async(taskInfo,projectData) =>{
    let newTask = projectData[`${taskInfo.catigory}`].filter((i)=>  i._id!=taskInfo.taskId)
    console.log(taskInfo)
    let mapCtigories ={
        toDo:{toDo:newTask},
        done:{done:newTask},
        doing:{doing:newTask}
    }
    await project.updateOne({_id:taskInfo.taskProjectId},mapCtigories[`${taskInfo.catigory}`])
}