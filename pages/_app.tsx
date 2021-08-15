import '../styles/main.scss'
import {useEffect} from 'react'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux';
import store from '../redux/app/store';
import {GlobalLogic} from '../components/globlaLogic/globalLogic'
import { useVerify } from "../components/customHooks/useVerify"; 
import {useDispatch} from "react-redux";

function MyApp({ Component, pageProps }) {

  return(
    <Provider store={store}>
    <NavBar />
    <GlobalLogic/>
     <Component {...pageProps} />
     </Provider>
     )
}

export default MyApp
