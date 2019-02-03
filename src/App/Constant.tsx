import Loadable from "react-loadable";
import { Loading } from '../MaterializeComponents/Loading';

/**
 * Objek Page yang Diload secara on-demand (Lazy)
 * Tidak Dapat Dijadikan Import Variable pada Webpack (Harus String)
 * 
 * @author Mufid Jamaluddin
 */
export const Home = Loadable({
    loader: () => import('../Pages/Home/Home'),
    loading: Loading
});

export const NotFound = Loadable({
    loader: () => import('../Pages/NotFound/NotFound'),
    loading: Loading
});

export const About = Loadable({
    loader: () => import('../Pages/About/About'),
    loading: Loading
});

export const Contact = Loadable({
    loader: () => import('../Pages/Contact/Contact'),
    loading: Loading 
});