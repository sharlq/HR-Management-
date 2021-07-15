import project from '../../../Model/project'
import { deleteTask } from '../../../controllersAPI/projects/tasks';

export default (req,res) => {

    if(req.method==="DELETE"){
        deleteTask(req,res)
    }

}