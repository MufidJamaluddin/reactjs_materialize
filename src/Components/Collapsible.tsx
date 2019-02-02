import React from "react";

/**
 * Item Collapsible
 * @author Mufid Jamaluddin
 */
interface CollapsibleItemModel { icon?:string; title:string }

export class CollapsibleItem extends React.Component<CollapsibleItemModel>
{
    /**
     * Header Item
     */
    public getJsxHeader() : JSX.Element
    {
        if(this.props.icon)
        {
            return (
                <div className="collapsible-header">
                    <i className="material-icons">{ this.props.icon }</i>
                    { this.props.title }
                </div>
            )
        }
        else
        {
            return (
                <div className="collapsible-header">{ this.props.title }</div>
            )
        }
    }

    /**
     * Render
     */
    public render()
    {
        return (
            <div className="collapsible">
                { this.getJsxHeader() }
                <div className="collapsible-body">{ this.props.children }</div>
            </div>
        )
    }
}