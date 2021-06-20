import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
const projectsSlice = createSlice({
    name:'projectsReducer',
    initialState:{
        projects:[],
        selectedProject:{}
    },
    reducers:{
        getProjects(state,action){
            state.projects=action.payload
        },
        getSelectedProject(state,action){
            state.selectedProject = action.payload
        }
    }
})

export const {getProjects,getSelectedProject} = projectsSlice.actions
export const selectProjects = (state:RootState) => state.projectsReducer.projects
export const selectSelectedProject =(state:RootState) => state.projectsReducer.selectedProject
export default projectsSlice.reducer