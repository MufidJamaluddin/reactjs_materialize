import React from "react";
import M from "materialize-css";

/**
 * Field Form
 * @author Mufid Jamaluddin
 */
interface FieldModel 
{ 
    // Tambahan Kelas HTML
    className?:string; 

    // Label Field
    label:string; 

    // name Field
    name:string; 

    // type 
    type:string;

    // pattern validation 
    pattern?:string; 

    // error validation
    error?:string; 

    // success validation
    success?:string 
}

export class Field extends React.Component<FieldModel>
{
    /**
     * Custom HTML Class 
     */
    private getHtmlClassName() : string
    {
        let str = "input-field col ";

        str.concat(this.props.className || "s12");

        return str;
    }

    private getJsxInput() : JSX.Element
    {
        if(this.props.pattern)
        {
            return (
                <input type={this.props.type} name={this.props.name} pattern={this.props.pattern} className="validate"></input>
            )
        }
        else
        {
            return (
                <input type={this.props.type} name={this.props.name}></input>
            )
        }
    }

    /**
     * Render Field
     */
    public render() : JSX.Element
    {
        if(this.props.success && this.props.error)
        {
            return (
                <div className={ this.getHtmlClassName() }>
                    { this.getJsxInput() }
                    <label>{this.props.label}</label>
                    <span className="helper-text" data-error={ this.props.error } data-success={ this.props.success }></span>
                </div>
            )
        }
        else
        {
            return (
                <div className={ this.getHtmlClassName() }>
                    { this.getJsxInput() }
                    <label>{this.props.label}</label>
                </div>
            )
        }
    }
}

/**
 * Form Materialize dengan Serialize
 * 
 * @author Mufid Jamaluddin
 */
interface FormModel { className?:string; action?:string; method?:string }

export class Form extends React.Component<FormModel>
{   
    constructor(props:Readonly<FormModel>)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Menghandle Submit Form
     * @param event Event Klik Form
     */
    private onSubmit(event: React.FormEvent<HTMLFormElement>) : void
    {
        event.preventDefault();
        const form:HTMLFormElement = event.currentTarget;
        const data:FormData = new FormData(form);
        
        let obj = this;

        if(this.props.action)
        {            
            fetch(this.props.action, {
                method: this.props.method || "POST",
                body: data
            }).catch(function(error){
                M.toast({ html: error });
            });
        }
        else
        {
            let json:any = {};

            data.forEach(function(value, key){
                json[key] = value;
            });

            console.log(json);

            M.toast({ html: "Submit Tanpa Arah Action!.." })
        }
    }

    /**
     * Render Form
     */
    public render() : JSX.Element
    {
        return (
            <form className={ this.props.className || "container" } onSubmit={ this.onSubmit }>
                <div className="row">
                    { this.props.children }
                </div>
            </form>
        )
    }
}