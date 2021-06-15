import leave from '../../Model/leaveForm'
export default (req,res) =>{
    if(req.method==="POST"){
        let data = req.body
        leave.create(data,(err,data)=>{
            if(err){
                res.send(err)
            }else if(data){
                res.status(200).send("leave request waiting approval")
            }
        })
    }
}