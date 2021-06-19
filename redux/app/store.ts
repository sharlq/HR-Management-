import {configureStore} from '@reduxjs/toolkit'
import skillsReducer from '../features/skillsSlice'
import projectsReducer from '../features/projectsSlice'
const store = configureStore({
    reducer: {
      skills:  skillsReducer,
      projectsReducer:  projectsReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export default store