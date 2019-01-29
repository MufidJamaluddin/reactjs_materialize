import * as React from "react";

/**
 * Halaman Tidak Ditemukan
 * @author Mufid Jamaluddin
 */
class NotFound extends React.Component
{
    render()
    {
        document.title = "404 Not Found";

        return (
            <div className="container">
                <h1>404</h1>
                <p>Page not found - </p>
            </div>
        )
    }
}

export default NotFound;