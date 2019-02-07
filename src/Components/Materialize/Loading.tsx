import * as React from "react";
import '../../style.css';
import { LoadingComponentProps } from 'react-loadable';

/**
 * Fungsi untuk menampilkan 
 * Loading
 * 
 * @author Mufid Jamaluddin
 */
export class Loading extends React.Component<LoadingComponentProps>
{
    constructor(props: Readonly<LoadingComponentProps>)
    {
        super(props);
        this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    public getErrorMessage() : string
    {
        if(this.props.error) return String(this.props.error);
        else if(this.props.timedOut) return " Connection Timed Out!";
        else return " Load a Page";
    }

    protected retryView(errorMessage: string, onRetry: () => void) : JSX.Element
    {
        return (
            <div className="loader">
                Error { errorMessage }
                <button className="btn waves-effect waves-light lime" onClick={ onRetry }>
                    Retry
                    <i className="material-icons right">autorenew</i>
                </button>
            </div>
        );
    }

    protected loadingView() : JSX.Element
    {
        return (
            <div className="loader">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    public render() : JSX.Element
    {
        if(this.props.error)
            return this.retryView(this.getErrorMessage(), this.props.retry);
        else
            return this.loadingView();
    }
}