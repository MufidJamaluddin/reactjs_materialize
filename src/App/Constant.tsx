import Loadable from "react-loadable";
import Loading from "./Loading";

/**
 * Objek Page yang Diload secara on-demand (Lazy)
 * Tidak Dapat Dijadikan Import Variable pada Webpack (Harus String)
 * 
 * @author Mufid Jamaluddin
 */
export const Home = Loadable({
    loader: () => import('./../Home/Home'),
    loading: Loading
});

export const NotFound = Loadable({
    loader: () => import('./../NotFound/NotFound'),
    loading: Loading
});

export const About = Loadable({
    loader: () => import('./../About/About'),
    loading: Loading
});

export const Contact = Loadable({
    loader: () => import('./../Contact/Contact'),
    loading: Loading 
});