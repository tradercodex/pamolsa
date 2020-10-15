import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Slider from "react-slick";
import WOW from 'wowjs'
import '../styles/slicks.css'

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true
};

class Slicks extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {

        let pathname = this.props.match.path

        return (
            <Fragment>
                {
                    pathname === "/" ?
                        <div>
                            <div className="Slicks-pm">
                                <div className="Radius"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick"
                                        >
                                            <div className="info-slick">
                                                <h2
                                                    className="wow animate__animated animate__fadeInUp"
                                                    data-wow-duration="2s"
                                                    data-wow-delay="0.1s"
                                                >Conoce la primera línea de empaques biodegradables</h2>
                                                <p
                                                    className="wow animate__animated animate__fadeInDown"
                                                    data-wow-duration="2s"
                                                    data-wow-delay="0.7s"
                                                >100% bagazo en caña de azucar</p>
                                                <div
                                                    className="more-btn wow animate__animated animate__fadeInDown"
                                                    data-wow-duration="2s"
                                                    data-wow-delay="1.3s"
                                                >
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
                                                <div className="more-btn wow animate__animated animate__fadeInDown"
                                                    data-wow-duration="2s"
                                                    data-wow-delay="1.3s">
                                                    <button>Conocer más</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className="Elipse wow animate__animated animate__fadeInLeft"
                                    data-wow-duration="2s"
                                    data-wow-delay="2s">
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
                            <div className="Slicks-pm Us">
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us">
                                            <div className="info-slick Us">
                                                <h2>Nosotros</h2>
                                                <p>Ofrecemos soluciones innovadoras y personalizadas de empaques sostenibles</p>
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
                            <div className="Slicks-pm Us">
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us Sb">
                                            <div className="info-slick Us">
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
                            <div className="Slicks-pm Us" style={{background: "#F9F9F9"}}>
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us Wu">
                                            <div className="info-slick Us">
                                                <h2>¡Trabaja con nosotros y se parte de nuestra familia!</h2>
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
                            <div className="Slicks-pm Us">
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us Cl">
                                            <div className="info-slick Us">
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
                            <div className="Slicks-pm Us">
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us New">
                                            <div className="info-slick Us">
                                                <h2>Noticias</h2>
                                                <p>Entérate de nuestras últimas novedades</p>
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
                            <div className="Slicks-pm Us">
                                <div className="Radius Us"></div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="Rotate-slick Us Ctt">
                                            <div className="info-slick Us">
                                                <h2>Contacto</h2>
                                                <p>Dejanos tus datos para contactarte</p>
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
}

export default withRouter(Slicks);