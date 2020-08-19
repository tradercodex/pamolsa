import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Slider from "react-slick";
import '../styles/slicks.css'

const Slicks = ({ match }) => {

    let pathname = match.path
    console.log(pathname)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <Fragment>
            {
                pathname === "/" ?
                    <div>
                        <div className="Slicks-pm">
                            <div className="Radius"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick">
                                        <div className="info-slick">
                                            <h2>Conoce la primera línea de empaques biodegradables</h2>
                                            <p>100% bagazo en caña de azucar</p>
                                            <div className="more-btn">
                                                <button>Conocer más</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Rotate-slick">
                                        <div className="info-slick">
                                            <h2>Conoce la primera línea de empaques biodegradables</h2>
                                            <p>100% bagazo en caña de azucar</p>
                                            <div className="more-btn">
                                                <button>Conocer más</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="Elipse">
                                <img src={require('../images/img/bioform.png')} />
                            </div>
                        </div>
                        <div className="footer-slick">
                            <div className="tree-pm">
                                <img src={require('../images/img/caña.png')} />
                            </div>
                        </div>
                    </div> : ''
            }

            {
                pathname === "/nosotros" ?
                    <div>
                        <div className="Slicks-us_pm">
                            <div className="Radius-us"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_us">
                                        <div className="info-slick_us">
                                            <h2>Nosotros</h2>
                                            <p>Experiencia y calidad a su servicio</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/sostenibilidad" ?
                    <div>
                        <div className="Slicks-sb_pm">
                            <div className="Radius-us"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_sb">
                                        <div className="info-slick_sb">
                                            <h2>Sostenibilidad</h2>
                                            <p>Nuestro compromiso con el entorno para ser rentables</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/trabaja-con-nosotros" ?
                    <div>
                        <div className="Slicks-wwu_pm">
                            <div className="Radius-wwu"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_wwu">
                                        <div className="info-slick_wwu">
                                            <h2>Trabaja con nosotros</h2>
                                            <p>Experiencia y calidad a su servicio</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
             {
                pathname === "/clientes" ?
                    <div>
                        <div className="Slicks-clts_pm">
                            <div className="Radius-clts"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_clts">
                                        <div className="info-slick_clts">
                                            <h2>Clientes</h2>
                                            <p>Experiencia y calidad a su servicio</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/noticias" ?
                    <div>
                        <div className="Slicks-news_pm">
                            <div className="Radius-news"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_news">
                                        <div className="info-slick_news">
                                            <h2>Noticias</h2>
                                            <p>Conoce nuetras ultimas noticias</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/contacto" ?
                    <div>
                        <div className="Slicks-cnt_pm">
                            <div className="Radius-cnt"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick_cnt">
                                        <div className="info-slick_cnt">
                                            <h2>Noticias</h2>
                                            <p>Conoce nuetras ultimas noticias</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> : ''
            }
        </Fragment>
    );
}

export default withRouter(Slicks);