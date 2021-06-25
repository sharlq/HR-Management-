import jwt from 'jsonwebtoken'
import user from '../../Model/user'
export default (req,res)=>{
    if(req.method ==="GET"){
        let SECRET = process.env.REACT_APP_JWT_SECRET
        let cookie = req.cookies
        jwt.verify(cookie.auth,SECRET,(err,decoded)=>{
            user.findOne({name:decoded.name},(err,info)=>{
                if(!err&&info){
                    res.status(200).send(info.rank)
                }
            })
        })
    }
}