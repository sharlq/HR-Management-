import { call,put,all,takeEvery  } from '@redux-saga/core/effects'
import axios from 'axios'
import { getProjects } from '../features/projectsSlice'
import {setRank} from '../features/userSlice'

const requestsData = (url) =>{
 return  axios.get(url)
} 



function* fetchProjects() {
    const projects = yield call(requestsData,'/api/projects/projects')
    yield put(getProjects(projects.data))
}
function* fetchRank(){
    const rank = yield call(requestsData,'/api/authorization/rank')
    yield put(setRank(rank.data))
}

export default function* rootSaga(){
 yield all([
    yield takeEvery("INITIALIZE_DATA",fetchProjects),
    yield takeEvery("INITIALIZE_DATA",fetchRank),
    yield takeEvery("UPDATE_TASKS",fetchProjects)
 ])
}