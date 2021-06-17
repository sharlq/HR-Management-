import jwt from 'jsonwebtoken'
import project from '../../Model/project'
export default (req,res) =>{
    let SECRET = process.env.REACT_APP_JWT_SECRET
    if(req.method==="POST"){
        let data = req.body
        let cookies = req.cookies
        jwt.verify(cookies.auth,SECRET,(err,decoded)=>{
            if(!err && decoded){
                project.create({
                    projectName:data.projectName,
                    projectDepartment:data.projectDepartment,
                    projectManager:data.projectManager,
                    team:[decoded.name],
                    toDo:[],
                    doing:[],
                    done:[]
                })
            }else{
                res.send("Sign In")
            }
        })
    }
    if(req.method==="GET"){
        let cookies = req.cookies
        jwt.verify(cookies.auth,SECRET,(err,decoded)=>{
            if(!err && decoded){
            project.find({},(err,docs)=>{
                let usersProjects = docs.filter((i)=> decoded.name in i.team)
                res.send(usersProjects)
            })}
        })
        
    }
}