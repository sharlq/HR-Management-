import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
const projectsSlice = createSlice({
    name:'projectsReducer',
    initialState:{
        projects:[],
        selectedProject:null,
        triggerAddTask:false,
        taskCatigory:''
    },
    reducers:{
        getProjects(state,action){
            state.projects=action.payload
        },
        getSelectedProject(state,action){
            state.selectedProject = action.payload
        },
        triggerAddTaskPopUp(state,action){
            state.triggerAddTask = !state.triggerAddTask
        },
        getTaskCatigory(state,action){
            state.taskCatigory = action.payload
        }
    }
})

export const {getProjects,getSelectedProject,triggerAddTaskPopUp,getTaskCatigory} = projectsSlice.actions
export const selectProjects = (state:RootState) => state.projectsReducer.projects
export const selectSelectedProject =(state:RootState) => state.projectsReducer.selectedProject
export const selectAddTaskTrigger = (state:RootState) => state.projectsReducer.triggerAddTask
export const selectTaskCatigory = (state:RootState) => state.projectsReducer.taskCatigory
export default projectsSlice.reducer