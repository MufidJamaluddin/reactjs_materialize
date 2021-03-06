import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, About, Contact, NotFound } from './Constant';
import App from './App';

/**
 * Router Aplikasi
 * 
 * @author Mufid Jamaluddin
 */
class Router extends React.Component 
{
    public render() : JSX.Element
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

export default Router;