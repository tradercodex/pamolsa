import React, { Fragment } from 'react';
import Slider from "react-slick";
import { withRouter } from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/products.css'
import { Link } from 'react-scroll'

const ProductsPopulate = ({ match, relacionates, productsPopulate }) => {

    let pathname = match.path

    const settingsPopulate = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <Fragment>
            {
                pathname === "/producto/detalle/:id" ?
                    <div className="Products-populate_pm"
                        style={{
                            background: "#F9F9F9"
                        }}
                    >
                        <h4>Productos relacionados</h4>
                        <p>Pensamos que te pueden interesar estos productos</p>
                        <div className="products-default" style={{ maxWidth: "1640px", margin: "0 auto" }}>
                            {
                                relacionates && relacionates.length > 0 ?
                                    relacionates.map(product => (
                                        <div key={product.id} style={{ marginTop: "50px", marginBottom: "80px", display: "flex", justifyContent: "center" }}>
                                            <div className="product">
                                                <div className="square-products"></div>
                                                <h5>{product.name}</h5>
                                                {
                                                    product.image.map((thumb, index) =>
                                                        <div className="img-product" key={index}>
                                                            <img src={`http://` + thumb.url} alt="" />
                                                        </div>
                                                    )
                                                }
                                                <Link style={{ position: "absolute" }} to="header" smooth={true} duration={1000} offset={-2000} ><LinkRouter to={`/producto/detalle/${product.id}`}>Ver más</LinkRouter></Link>
                                            </div>
                                        </div>
                                    )) : ''
                            }
                        </div>
                    </div> : ''
            }
            {
                pathname === "/productos" || pathname === "/productos/:name" ? 
                    <div className="Products-populate_pm">
                        <h4>Los más populares</h4>
                        <p>Estos son nuestros productos más vendidos</p>
                        <div className="Container-products_populate">
                            <Slider {...settingsPopulate} className="products-default">
                                    {
                                        productsPopulate && productsPopulate.length > 0 ?
                                        productsPopulate.map(product => (
                                                <div key={product.id}>
                                                    <div className="product">
                                                        <div className="square-products"></div>
                                                        <h5>{product.name}</h5>
                                                        {
                                                            product.image.map((thumb, index) =>
                                                                <div className="img-product" key={index}>
                                                                    <img src={`http://` + thumb.url} alt="" />
                                                                </div>
                                                            )
                                                        }
                                                        <Link style={{ position: "absolute" }} to="header" smooth={true} duration={1000} offset={-2000} ><LinkRouter to={`/producto/detalle/${product.id}`}>Ver más</LinkRouter></Link>
                                                    </div>
                                                </div>
                                            )) : ''
                                    }

                            </Slider>
                        </div>
                    </div> : ''
            }
        </Fragment>
    );
}

export default withRouter(ProductsPopulate);