import React from "react";

/**
 * FeatureDiscovery
 * doc : https://materializecss.com/feature-discovery.html
 * @author Mufid Jamaluddin
 */
interface FeatureDiscoveryModel { icon:string; target:string; }

export class FeatureDiscovery extends React.Component<FeatureDiscoveryModel>
{
    private tapElement?:any;
    private tapInstance?:M.TapTarget;

    /**
     * Component Akan di Load
     */
    public componentDidMount() : void
    {
        M.TapTarget.init(this.tapElement);

        this.tapInstance = M.TapTarget.getInstance(this.tapElement);
        this.tapInstance.open();
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