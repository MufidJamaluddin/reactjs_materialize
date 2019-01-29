import * as React from "react";
import '../style.css';

/**
 * Fungsi untuk menampilkan 
 * Loading
 * 
 * @author Mufid Jamaluddin
 */
function Loading(props: any) : JSX.Element
{
    if(props.error)
    {
        return (
            <div className="loader">
                Error! 
                <button className="btn waves-effect waves-light lime" onClick={ props.retry }>
                    Retry
                    <i className="material-icons right">autorenew</i>
                </button>
            </div>
        )
    }
    else
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
}

export default Loading;