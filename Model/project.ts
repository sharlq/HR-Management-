import mongoose from './dataBaseConfig'

const MODEL_NAME= "projects"
const project = new mongoose.Schema({
    projectName:String,
    ProjectDepartment:String,
    projectManager:String,
    team:[String],
    toDo:[{
        title:String,
        description:String,
        team:String
    }],
    doing:[{
        title:String,
        description:String,
        team:String
    }],
    done:[{
        title:String,
        description:String,
        team:String
    }]
})
export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, project,'Projects')