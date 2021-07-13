import '../styles/main.scss'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux';
import store from '../redux/app/store';
import { useVerify } from "../components/customHooks/useVerify";
function MyApp({ Component, pageProps }) {
  useVerify()
  return(
    <Provider store={store}>
    <NavBar />
     <Component {...pageProps} />
     </Provider>
     )
}

export default MyApp
