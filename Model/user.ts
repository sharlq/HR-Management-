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
        },
        profileImg:{
            type:String,
            required:false
        },
        designation:{
            type:String,
            required:false
        },
        department:{
            type:String,
            required:false
        },
        aboutme:{
            type:String,
            required:false
        },
        skills:{
            type:Array,
            required:false
        },
        reportingManager:{
            type:String,
            required:false
        },
        rank:{
            type:String,
            required:false
        }
 })

 export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, user,'Users')