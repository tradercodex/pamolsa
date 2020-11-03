import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import Slider from "react-slick";
import WOW from 'wowjs'
import '../styles/slicks.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import Style from 'style-it'

const Slicks = ({ match }) => {

    let pathname = match.path

    const banners = useSelector(state => state.banners.banners)
    const dispatch = useDispatch()

    useEffect(() => {
        new WOW.WOW().init();
        dispatch(getBanners(4,1));
    }, [])

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

    return (
        <Fragment>
            {
                pathname === "/" ?
                    <div>
                        <div className="Slicks-pm">
                            <div className="Radius"></div>
                            <Slider {...settings}>
                                {
                                    banners && banners.length > 0 ?
                                        banners.map(item => (
                                            <div key={item.id}>
                                                <Style>
                                                    {
                                                        `.Rotate-slick {
                                                            overflow: hidden;
                                                            position: relative;
                                                            width: 2200px;
                                                            height: 1206.42px;
                                                            top: -410px;
                                                            z-index: 3000;
                                                            left: -153px;
                                                            border-radius: 191px;
                                                            transform: rotate(-21.34deg);

                                                        }
                                                        
                                                        .Rotate-slick::after {
                                                            content: '';
                                                            z-index: 1022;
                                                            position: absolute;
                                                            background-blend-mode: soft-light;
                                                            background-color: rgba(156, 167, 8, 0.1);
                                                            background-repeat: no-repeat;
                                                            background-size: cover;
                                                            left: -26px;
                                                            top: 346px;
                                                            transform: rotate(21.34deg);
                                                            min-width: 100%;
                                                            height: 100%;
                                                            background-image: url("http://${item.file.url}")
                                                        }

                                                        @media (max-width: 1440px) {
                                                            .Rotate-slick::after{
                                                                min-width: 110%;
                                                                height: 105%;
                                                                background-size: contain !important;
                                                            }
                                                        }
                                                        `

                                                    }
                                                    <div className="Rotate-slick">
                                                        <div className="Elipse wow animate__animated animate__fadeInLeft">
                                                            {/* <img src={item.circle.url === null} alt=""/> */}
                                                        </div>
                                                        <div className="info-slick">
                                                            <h2
                                                                className="wow animate__animated animate__fadeInUp"
                                                                data-wow-duration="2s"
                                                                data-wow-delay="0.1s"
                                                            >{item.name}</h2>
                                                            <p
                                                                className="wow animate__animated animate__fadeInDown"
                                                                data-wow-duration="2s"
                                                                data-wow-delay="0.7s"
                                                            >{item.subname}</p>
                                                            <div
                                                                className="more-btn wow animate__animated animate__fadeInDown"
                                                                data-wow-duration="2s"
                                                                data-wow-delay="1.3s"
                                                            >
                                                                <button>Conocer más</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Style>
                                            </div>
                                        )) : ''
                                }
                            </Slider>
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
                        <div className="Slicks-pm Us" style={{ background: "#F9F9F9" }}>
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

export default withRouter(Slicks);