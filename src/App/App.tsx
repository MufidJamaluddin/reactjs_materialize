import React from "react";
import { Link } from 'react-router-dom';
import "./../styles.css";

/**
 * Struktur Aplikasi Utama
 * Children : Isi Page
 * 
 * @author Mufid Jamaluddin
 */
class App extends React.Component 
{
    render() 
    {
        return (
            <div>
                <h1 className="title">Single Page Application</h1>
                <ul className="header">
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;