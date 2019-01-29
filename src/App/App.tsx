import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "../Components/Navbar";
import { Footer } from '../Components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import '../style.css';

/**
 * Struktur Aplikasi Utama
 * Children : Isi Page
 * 
 * @author Mufid Jamaluddin
 */
class App extends React.Component 
{
    static appname:string = "SPA Starter Mufid";
 
    public render() 
    {
        return (
            <div className="ubody">
                <header>
                    <Navbar brand={ App.appname }>
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </Navbar>                   
                </header>
                <main className="container">
                    {this.props.children}
                </main>
                <Footer brand={ App.appname } className="orange">
                    <div className="col s6">
                        Bagian Kiri
                    </div>
                    <div className="col s6">
                        Bagian Kanan
                    </div>
                </Footer>
            </div>
        )
    }
}

export default App;