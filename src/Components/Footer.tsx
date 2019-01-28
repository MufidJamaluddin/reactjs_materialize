import React from "react";

/**
 * Footer Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface FooterModel { brand:string, cyear?:number }

export class Footer extends React.Component<FooterModel>
{
    private getCurrentYear() : number
    {
        let date = new Date();
        let year = date.getFullYear();

        return year;
    }

    private getCopyrightYear() : number
    {
        if(this.props.cyear) return this.props.cyear;
        else return this.getCurrentYear();
    }

    public render() 
    {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        { this.props.children }
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © { this.getCopyrightYear() } | { this.props.brand }
                    </div>
                </div>
            </footer>
        )
    }
}