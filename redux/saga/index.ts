import { call,put  } from '@redux-saga/core/effects'
import axios from 'axios'
import { getProjects } from '../features/projectsSlice'
const requestProjects = (url) =>{
 return   axios.get(url)
} 

export default function* fetchProjects(){
    try{
        const projects = yield call(requestProjects,'http://localhost:3000/api/projects')
        yield put(getProjects(projects.data))
        console.log("life pls",projects)
    }catch(e){

    }
}