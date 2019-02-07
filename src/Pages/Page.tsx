import React from 'react';

/**
 * Page 
 * @author Mufid Jamaluddin
 */
abstract class Page extends React.Component
{
    protected title:string = "";

    public componentWillMount() : void
    {
        document.title = this.title;
    }
}

export {Page};