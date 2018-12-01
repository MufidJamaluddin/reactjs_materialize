import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./App";
import { Home, About, Contact, NotFound } from './Constant';


/**
 * Router Aplikasi
 * 
 * @author Mufid Jamaluddin
 */
class ReactRouter extends React.Component 
{
    // Method Render
    public render() 
    {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/home" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                        <Route path = "*" component = {NotFound} />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}

export default ReactRouter;