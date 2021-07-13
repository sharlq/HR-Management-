import '../styles/main.scss'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux';
import store from '../redux/app/store'
function MyApp({ Component, pageProps }) {
  return(
    
    <Provider store={store}>
    <NavBar />
     <Component {...pageProps} />
     </Provider>
     )
}

export default MyApp
