import * as React from "react";
import { Hello } from "./Hello";

/**
 * Halaman Utama
 * @author Mufid Jamaluddin
 */
class Home extends React.Component
{
    private title:string = "Home SPA";

    public componentWillMount() : void
    {
        document.title = this.title;
    }

    render()
    {
        return (
            <Hello name="Mufid Jamaluddin" />
        )
    }
}

export default Home;