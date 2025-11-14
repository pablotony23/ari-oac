import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import '../public/css/meanmenu.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css'
import '../public/css/style.css'
import '../public/css/responsive.css' 

import Layout from '../components/_App/Layout';
import { Provider } from 'react-redux'
import { useStore } from '../store/reducers/reducers'
import middleware from '../middleware/middleware'; 


const MyApp =  ({ Component, pageProps }) => {

    const store = useStore(pageProps.initialReduxState)

    middleware(pageProps);
    
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}

export default MyApp