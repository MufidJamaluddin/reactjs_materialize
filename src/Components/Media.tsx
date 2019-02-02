import React from "react";

/**
 * Material Box
 * doc : https://materializecss.com/media.html
 * @author : Mufid Jamaluddin
 */
interface MaterialBoxModel { width:number; image:string; }

export class MaterialBox extends React.Component<MaterialBoxModel & Partial<M.MaterialboxOptions>>
{
    private materialBoxElement?:any;
    private materialBoxInstance?:M.Materialbox;

    public componentDidMount() : void
    {
        let options:Partial<M.MaterialboxOptions> = this.props;

        M.Materialbox.init(this.materialBoxElement, options);

        this.materialBoxInstance = M.Materialbox.getInstance(this.materialBoxElement);

        this.materialBoxInstance.open();
    }

    public componentWillUnmount() : void
    {
        if(this.materialBoxInstance) this.materialBoxInstance.destroy();
    }

    public render() : JSX.Element
    {
        return (
            <img 
                ref={ element => ( this.materialBoxElement = element ) } 
                className="materialboxed" 
                width={ this.props.width } 
                src={ this.props.image }>
            </img>
        );
    }
}