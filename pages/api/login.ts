import user from "../../Model/user";
import bcrypt from "bcrypt";

type userData = {
    name:string,
    password:string,
    email:string
}

export default async(req,res)=>{
    if(req.method === "POST"){
        let data = req.body
        let theUser:userData|null =null
       await user.findOne({name:data.name},(err,dat)=>{
            if(dat){
            theUser=dat
            }else{
                console.log("dead")
            }
        })
        if(theUser){
        bcrypt.compare(data.password,theUser.password,(err, result)=>{
            if(result){
                console.log("we got'em")
            }else{
                console.log("shit he is a fraud")
            }
        })}else{
            console.log("theUser is a ghost")
        }
    }
}