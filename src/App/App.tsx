import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "../Components/Navbar";
import { Footer } from '../Components/Footer';
import 'materialize-css/dist/css/materialize.min.css';

/**
 * Struktur Aplikasi Utama
 * Children : Isi Page
 * 
 * @author Mufid Jamaluddin
 */
class App extends React.Component 
{
    static appname:string = "SPA Starter";
 
    public render() 
    {
        return (
            <div>
                <Navbar brand={ App.appname }>
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer brand={ App.appname }>
                    <div className="s6 center-align">
                        Bagian Kiri
                    </div>
                    <div className="s6 center-align">
                        Bagian Kanan
                    </div>
                </Footer>
            </div>
        )
    }
}

export default App;