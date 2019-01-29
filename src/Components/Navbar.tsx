import React from "react";
import { Link } from 'react-router-dom';

import M from "materialize-css";

/**
 * Navbar Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface NavbarModel { brand?:string }

export class Navbar extends React.Component<NavbarModel>
{
    private Sidenav?:any;

    public componentDidMount(): void
    {
        M.Sidenav.init(this.Sidenav);
    }

    public render() 
    {
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">{ this.props.brand }</Link>
                    <a data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        { this.props.children }
                    </ul>
                </div>
                <ul 
                    ref={ Sidenav => { this.Sidenav = Sidenav }}
                    id="nav-mobile" 
                    className="sidenav"
                >
                    { this.props.children }
                </ul>
            </nav>
        )
    }
}