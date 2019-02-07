import React from "react";
import { Link } from 'react-router-dom';
import { Openable } from '../Behavior/Openable';

/**
 * Sidenav Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface SidenavModel { brand?:string; right:JSX.Element; static?:boolean; }

export class Sidenav extends React.Component<SidenavModel & Partial<M.SidenavOptions>> implements Openable
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

    public isOpen() : boolean
    {
        if(this.sidenav_instance) return this.sidenav_instance.isOpen;
        else return false;
    }

    public open(): void
    {
        if(this.sidenav_instance) this.sidenav_instance.open();
    }

    public close() : void
    {
        if(this.sidenav_instance) this.sidenav_instance.close();
    }

    public getSidenavMode() : string
    {
        if(this.props.static) return "sidenav sidenav-fixed";
        else return "sidenav";
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
                    className={ this.getSidenavMode() }
                >
                    { this.props.children }
                </ul>
            </nav>
        )
    }
}