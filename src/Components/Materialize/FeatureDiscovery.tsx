import React from "react";
import { Openable } from '../Behavior/Openable';

/**
 * FeatureDiscovery
 * doc : https://materializecss.com/feature-discovery.html
 * @author Mufid Jamaluddin
 */
interface FeatureDiscoveryModel { target:string; open:boolean; }

export class FeatureDiscovery extends React.Component<FeatureDiscoveryModel> implements Openable
{
    private tapElement?:any;
    private tapInstance?:M.TapTarget;

    public isOpen(): boolean 
    {
        if(this.tapInstance) return this.tapInstance.isOpen;
        else return false;
    }

    public open(): void 
    {
        if(this.tapInstance) this.tapInstance.open();
    }
    
    public close(): void 
    {
        if(this.tapInstance) this.tapInstance.close();
    }

    /**
     * Component Akan di Load
     */
    public componentDidMount() : void
    {
        M.TapTarget.init(this.tapElement);

        this.tapInstance = M.TapTarget.getInstance(this.tapElement);
        if(this.props.open) this.tapInstance.open();
    }

    /**
     * Komponen akan di unmount
     */
    public componentWillUnmount() : void
    {
        if(this.tapInstance) this.tapInstance.destroy();
    }

    /**
     * Render
     */
    public render() : JSX.Element
    {
        return (
            <div 
                className="tap-target" 
                ref={ tap_element => ( this.tapElement = tap_element ) }
                data-target={ this.props.target }
            >
                <div className="tap-target-content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}