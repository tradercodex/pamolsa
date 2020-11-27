import React, { Fragment } from 'react';
import Slider from "react-slick";
import { withRouter } from 'react-router-dom'
import '../styles/products.css'

const ProductsPopulate = ({ match }) => {

    let pathname = match.path

    const settingsPopulate = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true
    };

    return (
        <Fragment>
            {
                pathname === "/productos/:name/detail" ?
                    <div className="Products-populate_pm"
                        style={{
                            background: "#F9F9F9"
                        }}
                    >
                        <h4>Productos relacionados</h4>
                        <p>Pensamos que te pueden interesar estos productos</p>
                        <div className="Container-products_populate" style={{
                            justifyContent: "space-between"
                        }}>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato bandeja 2D2 Bioform Carton P15</h5>
                                        <img src={require('../images/img/populate1.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Contenedor 1 Fibra- KS</h5>
                                        <img src={require('../images/img/populate2.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato 26 C/D Fibra -KS</h5>
                                        <img src={require('../images/img/populate3.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                            

                        </div>
                    </div> : ''
            }
            {
                pathname === "/productos" || pathname === "/productos/:name" ?
                    <div className="Products-populate_pm">
                        <h4>Los más populares</h4>
                        <p>Estos son nuestros productos más vendidos</p>
                        <div className="Container-products_populate">
                            <Slider {...settingsPopulate} className="populate-slick">
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato bandeja 2D2 Bioform Carton P15</h5>
                                        <img src={require('../images/img/populate1.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Contenedor 1 Fibra- KS</h5>
                                        <img src={require('../images/img/populate2.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato 26 C/D Fibra -KS</h5>
                                        <img src={require('../images/img/populate3.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato bandeja 2D2 Bioform Carton P15</h5>
                                        <img src={require('../images/img/populate1.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Contenedor 1 Fibra- KS</h5>
                                        <img src={require('../images/img/populate2.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="products-populate">
                                        <div className="square-products"></div>
                                        <h5>Plato 26 C/D Fibra -KS</h5>
                                        <img src={require('../images/img/populate3.png')} />
                                        <button>Ver más</button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
        </Fragment>
    );
}

export default withRouter(ProductsPopulate);