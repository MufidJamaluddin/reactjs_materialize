import React from "react";

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
                <input type={this.props.type} pattern={this.props.pattern} className="validate"></input>
            )
        }
        else
        {
            return (
                <input type={this.props.type}></input>
            )
        }
    }

    /**
     * Render Field
     */
    public render()
    {
        if(this.props.success && this.props.error)
        {
            return (
                <div className={ this.getHtmlClassName() }>
                    { this.getJsxInput() }
                    <label>{this.props.label}</label>
                    <span className="helper-text" data-error={this.props.error || ""} data-success={this.props.success || ""}></span>
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
interface FormStateModel { error:Array<string> }

export class Form extends React.Component<FormModel, FormStateModel>
{
    /**
     * Menghandle Submit Form
     * @param event Event Klik Form
     */
    private onSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const form:HTMLFormElement = event.currentTarget;
        const data = new FormData(form);

        this.state.error.length = 0;

        let obj = this;

        if(this.props.action)
        {
            fetch(this.props.action, {
                method: this.props.method || "POST",
                body: data
            }).catch(function(error){
                obj.state.error.push(error.statusText);
            });
        }
        else
        {
            console.log(data);
        }
    }

    /**
     * Render Form
     */
    public render()
    {
        this.state.error.map(function(value){
            M.toast({html: value})
        });

        return (
            <form className={ this.props.className || "col s12" } onSubmit={ this.onSubmit }>
                <div className="row">
                    { this.props.children }
                </div>
            </form>
        )
    }
}