import React from "react";
import { Link } from 'react-router-dom';

/**
 * Navbar Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface NavbarModel { brand?:string }

export class Navbar extends React.Component<NavbarModel>
{
    public render() 
    {
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">{ this.props.brand }</Link>
                    <Link to="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        { this.props.children }
                    </ul>
                </div>
                <ul id="nav-mobile" className="sidenav">
                    { this.props.children }
                </ul>
            </nav>
        )
    }
}