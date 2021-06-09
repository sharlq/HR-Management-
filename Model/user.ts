import mongoose from './dataBaseConfig'
let MODEL_NAME = 'User'
 const user = new mongoose.Schema({
     name:{
         type:String,
        required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
 })

 export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, user,'Users')