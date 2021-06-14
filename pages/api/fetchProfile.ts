import jwt from 'jsonwebtoken'
import users from '../../Model/user'
export default (req,res) =>{
    let cookies = req.cookies
    let SECRET = process.env.REACT_APP_JWT_SECRET
    if(req.method ==="GET"){
        jwt.verify(cookies.auth, SECRET,(err,decoded)=>{
            users.findOne({_id:decoded.id},(err,data)=>{
                res.send(data)
            })
        })
    }
}