import * as React from "react";

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
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    }
    else
    {
        return <h1 style={{
            marginTop:'10vh',
            display:'flex',
            justifyContent:'center',
            backgroundColor:'black',
            color:'gold',
            padding:'1rem'
        }}>Loading...</h1>;
    }
}

export default Loading;