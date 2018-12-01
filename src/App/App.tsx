import * as React from "react";
import { Link } from 'react-router-dom';

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
                <ul>
                <li><Link to="/">Homes</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;