import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Slider from "react-slick";
import catalogoExpress from '../pdf/catalogoexpress.pdf'
import { Link } from 'react-router-dom'
import '../styles/slicks.css'

const Slicks = ({ match, banners }) => {

    let pathname = match.path

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    // {
    //     banners && banners.length > 0 ?
    //         banners.map(item => (
    //             <div key={item.id}>
    //                 <Style>
    //                     {
    //                         `.Rotate-slick {
    //                             overflow: hidden;
    //                             position: relative;
    //                             width: 2200px;
    //                             height: 1206.42px;
    //                             top: -410px;
    //                             z-index: 3000;
    //                             left: -153px;
    //                             border-radius: 191px;
    //                             transform: rotate(-21.34deg);
    //                         }

    //                         @media (max-width: 1440px) {
    //                             .Rotate-slick::after{
    //                                 min-width: 110%;
    //                                 min-height: 105%;
    //                                 background-size: contain !important;
    //                             }
    //                         }
    //                         `

    //                     }
    //                     <div className="Rotate-slick">
    //                         <div className="Elipse">
    //                             {/* <img src={item.circle.url === null} alt=""/> */}
    //                         </div>
    //                         <div className="info-slick">
    //                             <h2>{item.name}</h2>
    //                             <p>{item.subname}</p>
    //                             <div className="more-btn">
    //                                 <Link to="/productos/linea/2">Conocer más</Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Style>
    //                 <div className="footer-slick">
    //                     <div className="tree-pm banner">
    //                         <img src={require('../images/img/tree.gif')} />
    //                     </div>
    //                 </div>
    //             </div>
    //         )) : ''
    // }

    return (
        <Fragment>
            {
                pathname === "/" ?
                    <div className="content-slick-home bg md movil xs ss">
                        <div className="Slicks-pm">
                            <div className="Radius"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick second movil xs ss">
                                        <div className="Elipse movil x">
                                            <img src={require('../images/img/circlebanner.png')} alt="" />
                                        </div>
                                        <div className="biof movil x">
                                            <img src={require('../images/img/bioformbanner.png')} alt="" />
                                        </div>
                                        <div className="info-slick">
                                            <h2>Nuestra línea de empaques</h2>
                                            <p>hechos con fibra de bagazo de caña de azúcar</p>
                                            <div className="more-btn">
                                                <Link to="/productos/linea/2">Conocer más</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-slick">
                                        <div className="tree-pm banner">
                                            <img src={require('../images/img/tree.gif')} alt="imagen" />
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div className="Rotate-slick movil xs ss">
                                        {/* <div className="Elipse movil x">
                                            <img src={require('../images/img/circlebanner.png')} alt="" />
                                        </div>
                                        <div className="biof movil x">
                                            <img src={require('../images/img/bioformbanner.png')} alt="" />
                                        </div> */}
                                        <div className="info-slick second" style={{top: "650px", left: "200px"}}>
                                            <h2>Ahora llegamos a la puerta de tu negocio</h2>
                                            <p>Tel: (01) 641-9595  - Wsp: 934-440291</p>
                                            <p>Horario de atención: Lunes a viernes 8:30 am - 5:30 pm</p>
                                            <div className="more-btn">
                                                <a style={{ background: "#005382" }} target="_blank" href="http://www.pamolsaexpress.com/">Ir a Ecommerce</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="footer-slick">
                                            <div className="tree-pm banner">
                                                <img src={require('../images/img/tree.gif')} alt="imagen" />
                                            </div>
                                        </div> */}
                                </div>
                            </Slider>
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
                                    <div className="Rotate-slick Us Main tablet ls movil xs">
                                        <div className="info-slick Us ls">
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
                                    <div className="Rotate-slick Us Sb movil ls xs">
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
                                    <div className="Rotate-slick Us Wu movil ls xs">
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
                            <div className="Radius Us Clients"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick Us Cl movil ls xs">
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
                    <div className="content-slick-new new">
                        <div className="Slicks-pm Us">
                            <div className="Radius Us News"></div>
                            <Slider {...settings}>
                                <div>
                                    <div className="Rotate-slick Us New movil ls xs ">
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
                                    <div className="Rotate-slick Us Ctt movil ls xs">
                                        <div className="info-slick Us">
                                            <h2>Contacto</h2>
                                            <p>Queremos conocerte</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="tree-new contact">
                                <img src={require('../images/img/tree.gif')} />
                            </div>
                        </div>
                    </div> : ''
            }
        </Fragment>
    );
}

export default withRouter(Slicks);
