import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../app/store'
const userSlice = createSlice({
    name:'user',
    initialState:{
        rank:''
    },
    reducers:{
        setRank(state,action){
            state.rank=action.payload
        }
    }

})

export const {setRank} = userSlice.actions
export const selectRank = (state:RootState) => state.user.rank
export default userSlice.reducer;