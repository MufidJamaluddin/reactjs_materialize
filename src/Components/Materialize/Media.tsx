import React from "react";
import { Openable } from '../Behavior/Openable';

/**
 * Material Box
 * doc : https://materializecss.com/media.html
 * @author : Mufid Jamaluddin
 */
interface MaterialBoxModel { width:number; image:string; open?:boolean; }

export class MaterialBox extends React.Component<MaterialBoxModel & Partial<M.MaterialboxOptions>> implements Openable
{
    private mbOpen: boolean = false;
    private materialBoxElement?:any;
    private materialBoxInstance?:M.Materialbox;

    public isOpen(): boolean 
    {
        return this.mbOpen;
    }

    public open(): void 
    {
        if(this.materialBoxInstance)
        { 
            this.materialBoxInstance.open();
            this.mbOpen = true;
        }
    }

    public close(): void 
    {
        if(this.materialBoxInstance)
        {
            this.materialBoxInstance.close();
            this.mbOpen = false;
        }
    }

    public componentDidMount() : void
    {
        let options:Partial<M.MaterialboxOptions> = this.props;

        M.Materialbox.init(this.materialBoxElement, options);

        this.materialBoxInstance = M.Materialbox.getInstance(this.materialBoxElement);

        if(this.props.open) this.materialBoxInstance.open();
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