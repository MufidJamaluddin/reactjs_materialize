import * as React from "react";

/**
 * Halaman Tidak Ditemukan
 * @author Mufid Jamaluddin
 */
class NotFound extends React.Component
{
    private title:string = "404 Not Found";

    public componentWillMount() : void
    {
        document.title = this.title;
    }

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