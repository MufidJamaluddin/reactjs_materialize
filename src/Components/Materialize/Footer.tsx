import React from "react";

/**
 * Footer Materialize
 * 
 * @author Mufid Jamaluddin
 */
interface FooterModel { brand:string; year?:number; className:string }

export class Footer extends React.Component<FooterModel>
{
    /**
     * Mendapatkan tahun ini
     */
    private getCurrentYear() : number
    {
        let date = new Date();
        let year = date.getFullYear();

        return year;
    }

    /**
     * Mendapatkan tahun copyright
     */
    private getCopyrightYear() : number
    {
        if(this.props.year) return this.props.year;
        else return this.getCurrentYear();
    }

    /**
     * Render
     */
    public render() : JSX.Element
    {
        return (
            <footer className={ this.props.className.concat(" page-footer") }>
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