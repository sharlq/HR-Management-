import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from '../features/tokenSlice'
const store = configureStore({
    reducer: tokenReducer
})


export type RootState = ReturnType<typeof store.getState>
export default store