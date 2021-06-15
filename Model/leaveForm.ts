import mongoose from './dataBaseConfig'
let MODEL_NAME = 'leave'
const leave = new mongoose.Schema({
    name:String,
    department:String,
    numberOfDays:Number,
    leaveType:String,
    reason:String,
    informedManager:Boolean
})

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, leave,'Leave')