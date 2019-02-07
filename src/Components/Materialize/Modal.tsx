import React, { Component } from "react";
import { Openable } from '../Behavior/Openable';

/**
 * Modal
 * doc : https://materializecss.com/modals.html
 * @author Mufid Jamaluddin
 */
interface ModalModel { type?:string; id:string; footer?:JSX.Element; open?:boolean; }

export class Modal extends Component<ModalModel & Partial<M.ModalOptions>> implements Openable
{
    private modalElement?:any;
    private modalInstance?:M.Modal;

    public componentDidMount() : void
    {
        let options:Partial<M.ModalOptions>;

        options = this.props;

        M.Modal.init(this.modalElement, options);

        this.modalInstance = M.Modal.getInstance(this.modalElement);

        if(this.props.open) this.modalInstance.open();
    }

    public componentWillUnmount() : void
    {
        if(this.modalInstance) this.modalInstance.destroy();
    }

    public isOpen(): boolean 
    {
        if(this.modalInstance) return this.modalInstance.isOpen;
        else return false;
    }

    public open() : void
    {
        if(this.modalInstance) this.modalInstance.open();
    }

    public close() : void
    {
        if(this.modalInstance) this.modalInstance.close();
    }

    public getType() : string
    {
        switch(this.props.type)
        {
            case "fixed":
                return "modal modal-fixed-footer";

            case "bottom":
                return "modal bottom-sheet";

            default:
                return "modal " + this.props.type;
        }
    }

    public render() : JSX.Element
    {
        return (
            <div className={ this.getType() } id={ this.props.id } ref={ elm => { this.modalElement = elm } }>
                <div className="modal-content">
                    { this.props.children }
                </div>
                <div className="modal-footer">
                    { this.props.footer }
                </div>
            </div>
        );
    }
}