import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../app/store'

const skillsSlice = createSlice({
    
    name:'skills',
    initialState:{
        skills:0
    },
    reducers:{
        setSkills:  (state,action)=>{
            state.skills=action.payload
        }

    }

})


export const {setSkills} = skillsSlice.actions
export const selectSkills = (state:RootState)=> state.skills
export default skillsSlice.reducer