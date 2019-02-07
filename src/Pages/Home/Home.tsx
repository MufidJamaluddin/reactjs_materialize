import * as React from "react";
import { Hello } from "./Hello";
import { FeatureDiscovery } from '../../Components/Materialize/FeatureDiscovery';
import { Page } from '../Page';

/**
 * Halaman Utama
 * @author Mufid Jamaluddin
 */
class Home extends Page
{
    protected title:string = "Home SPA";

    public render() : JSX.Element
    {
        return (
            <div className="container">
                <Hello name="Mufid Jamaluddin" />
                <button id="hoho" className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </button>
                <FeatureDiscovery target="hoho" open={true}>
                    <h1>Add</h1>
                    <p>A Bunch of Text</p>
                </FeatureDiscovery>
            </div>
        )
    }
}

export default Home;