import type { NextApiRequest, NextApiResponse } from 'next';
import user from "../../../Model/user";

export default (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="GET"){
        const query = req.query;
       user.find({},query.require,{},(err,result)=>{
            if(result&&!err){
                res.send(result)
            }
        }) 
    }
}
