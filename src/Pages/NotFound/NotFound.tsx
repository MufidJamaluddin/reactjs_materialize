import * as React from "react";
import { Page } from '../Page';

/**
 * Halaman Tidak Ditemukan
 * @author Mufid Jamaluddin
 */
class NotFound extends Page
{
    protected title:string = "404 Not Found";

    public render() : JSX.Element
    {
        return (
            <div className="container">
                <h1>404</h1>
                <p>Page not found - </p>
            </div>
        )
    }
}

export default NotFound;