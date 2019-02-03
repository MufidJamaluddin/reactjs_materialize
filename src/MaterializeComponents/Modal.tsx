import React, { Component } from "react";
import { Openable } from 'materialize-css';

/**
 * Modal
 * doc : https://materializecss.com/modals.html
 * @author Mufid Jamaluddin
 */
interface ModalModel { type?:string; id:string; footer?:JSX.Element }

export class Modal extends Component<ModalModel & Partial<M.ModalOptions>> implements Openable
{
    public isOpen: boolean = false;
    private modalElement?:any;
    private modalInstance?:M.Modal;

    public componentDidMount() : void
    {
        let options:Partial<M.ModalOptions>;

        options = this.props;

        M.Modal.init(this.modalElement, options);

        this.modalInstance = M.Modal.getInstance(this.modalElement);

        this.isOpen = this.modalInstance.isOpen;
    }

    public componentWillUnmount() : void
    {
        if(this.modalInstance) this.modalInstance.destroy();
    }

    public open() : void
    {
        if(this.modalInstance) 
        {
            this.modalInstance.open();
            this.isOpen = this.modalInstance.isOpen;
        }
    }

    public close() : void
    {
        if(this.modalInstance)
        {
            this.modalInstance.close();
            this.isOpen = this.modalInstance.isOpen;
        } 
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
                return "modal";
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