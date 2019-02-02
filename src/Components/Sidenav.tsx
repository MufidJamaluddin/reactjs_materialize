import React from "react";
import { Link } from 'react-router-dom';

import M from "materialize-css";

/**
 * Sidenav Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface SidenavModel { brand?:string; right:JSX.Element }

export class Sidenav extends React.Component<SidenavModel & Partial<M.SidenavOptions>>
{
    private sidenav_element?:any;
    private sidenav_instance?:M.Sidenav;

    public componentDidMount(): void
    {
        let options:Partial<M.SidenavOptions> = this.props;

        M.Sidenav.init(this.sidenav_element, options);

        this.sidenav_instance = M.Sidenav.getInstance(this.sidenav_element);

        this.sidenav_instance.open();
    }

    public componentWillUnmount() : void
    {
        if(this.sidenav_instance)
        {
            if(this.sidenav_instance.isOpen) this.sidenav_instance.close();

            this.sidenav_instance.destroy();
        }
    }

    public render() : JSX.Element
    {
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">{ this.props.brand }</Link>
                    <a data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        { this.props.right }
                    </ul>
                </div>
                <ul 
                    ref={ sidenav => { this.sidenav_element = sidenav }}
                    id="nav-mobile" 
                    className="sidenav"
                >
                    { this.props.children }
                </ul>
            </nav>
        )
    }
}