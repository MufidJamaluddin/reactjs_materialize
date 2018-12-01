import * as React from "react";

interface HelloModel {name: string}

/**
 * Komponen Hello
 * @author Mufid Jamaluddin
 */
export class Hello extends React.Component<HelloModel> 
{
    /*
    public constructor(props: HelloModel)
    {
        super(props);
    }
    */
    public render() 
    {
        return <h1>Hello {this.props.name}, Good Morning!</h1>;
    }
}