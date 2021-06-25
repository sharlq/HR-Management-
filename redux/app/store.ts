import {configureStore} from '@reduxjs/toolkit'
import skillsReducer from '../features/skillsSlice'
import projectsReducer from '../features/projectsSlice'
import userSlice from '../features/userSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/index'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
      skills:  skillsReducer,
      projectsReducer:  projectsReducer,
      user:userSlice
    },
    middleware:(getMiddlewares)=>getMiddlewares({thunk:false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export default store