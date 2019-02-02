import React from "react";

/**
 * Carousel Gambar
 * doc : https://materializecss.com/carousel.html
 * @author Mufid Jamaluddin
 */
interface CarouselItemModel { href:string; image:string; }

export class CarouselItem extends React.Component<CarouselItemModel>
{
    /**
     * Render
     */
    public render() : JSX.Element
    {
        return (
            <a className="carousel-item"  href={ this.props.href }>
                <img src={ this.props.image }></img>
            </a>
        )
    }
}



export class Carousel extends React.Component<Partial<M.CarouselOptions>>
{
    /**
     * Carousel Materialize dan Instance nya
     */
    private carouselMaterialize?:any;
    private carouselInstance?: M.Carousel;

    /**
     * Eksekusi Sebelum Komponen di Mount
     */
    public componentDidMount() : void
    {
        let options:Partial<M.CarouselOptions>;

        options = this.props;

        M.Carousel.init(this.carouselMaterialize, options);

        this.carouselInstance = M.Carousel.getInstance(this.carouselMaterialize);
    }

    /**
     * Destroy Carousel Instance
     */
    public componentWillUnmount() : void
    {
        if(this.carouselInstance) this.carouselInstance.destroy();
    }

    /**
     * Render
     */
    public render() : JSX.Element
    {
        return (
            <div 
                ref = { carouselMaterialize => ( this.carouselMaterialize = carouselMaterialize ) }
                className = "carousel"
            >
                { this.props.children }
            </div>
        )
    }
}

