import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../app/store'
const tokenSlice = createSlice({
    name:'jwt',
    initialState:{
        token:null
    },
    reducers:{
        setToken:  (state,action)=>{
            state.token=action.payload.token
        }

    }

})

export const {setToken} = tokenSlice.actions
export const selectToken = (state:RootState)=> state.token
export default tokenSlice.reducer