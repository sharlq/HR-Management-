import {configureStore} from '@reduxjs/toolkit'
import skillsReducer from '../features/skillsSlice'
const store = configureStore({
    reducer: skillsReducer
})


export type RootState = ReturnType<typeof store.getState>
export default store