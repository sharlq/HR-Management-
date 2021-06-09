import mongoose from 'mongoose'
const KEY = process.env.REACT_APP_MONGODB_CONNECTION
mongoose.connect(KEY, {useNewUrlParser: true, useUnifiedTopology: true});
export default mongoose