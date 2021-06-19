import { createSlice } from "@reduxjs/toolkit";

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
export const selectProjects = (state) => state.projects
export const selectSelectedProjects =(state) => state.selectedProject
export default projectsSlice.reducer