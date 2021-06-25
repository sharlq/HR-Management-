import { call,put  } from '@redux-saga/core/effects'
import axios from 'axios'
import { getProjects } from '../features/projectsSlice'
import {setRank} from '../features/userSlice'
const requestProjects = (url) =>{
 return   axios.get(url)
} 
const requestRank =(url) =>{
    return axios.get(url)
}

export default function* fetchProjects(){
    try{
        const projects = yield call(requestProjects,'http://localhost:3000/api/projects')
        yield put(getProjects(projects.data))
        const rank = yield call(requestRank,"http://localhost:3000/api/rank")
        yield put(setRank(rank.data))
        console.log("life pls",projects)
    }catch(e){

    }
}