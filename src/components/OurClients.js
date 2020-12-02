import React, { useEffect } from 'react';
import Box from '../images/svg/box'
import Buy from '../images/svg/buy'
import Hamburguer from '../images/svg/hamburguer';
import Cartel from '../images/svg/cartel';
import Maiz from '../images/svg/maiz';
import House from '../images/svg/house';
import $ from 'jquery'

const OurClients = () => {

    useEffect(() => {
        $('.clients-page .client-info:first').show();
        $('.footer-client_main a').on('click', function () {
            $('.hide').fadeOut(0)
            let enlace = $(this).attr('href');
            $(enlace).fadeIn(1000)
            $(this).addClass('active')
            return false;
        })
    }, [])

    return (
        <div className="container" style={{ paddingBottom: "80px" }}>
            <div className="container-grid clients-page"
                style={{ paddingTop: "50px" }}>
                <div className="info-clients">
                    <div>
                        <h2 className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s"
                        >
                            Nuestros Clientes
                            </h2>
                        <p
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s"
                        >
                            Ofrecemos a nuestros clientes soluciones de empaques  de acuerdo  a las tendencias del mercado, personalizadas e innovadoras, más amigables con el medio ambiente y siguiendo las tendencias del mercado.</p>
                        <div className="footer-client_main">
                            <h6 style={{ color: "#005286" }}
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">Conoce nuestros tipos de clientes:</h6>
                            <div className="types-clients wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="2.6s" >
                                <a href="#traditional"><Box /></a>
                                <a href="#autoservices"><Buy /></a>
                                <a href="#foodservices"><Hamburguer /></a>
                                <a href="#exportation"><Cartel /></a>
                                <a href="#agroindustrial"><Maiz /></a>
                                <a href="#industrial"><House /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="traditional" className="client-info hide">
                    <div  className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal tradicional</h6>
                        <p>Abastecemos de empaques para alimentos los diferentes  mercados de abastos a través de nuestros socios mayoristas y minoristas. El canal tiene como característica principal   la comercialización de volúmenes importantes.
                                </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client6.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="autoservices" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal Autoservicio</h6>
                        <p>Canal donde destaca el uso  de nuestros productos para el empacado  de sus alimentos  y comercialización  al usuario final a través de la exhibición en las góndolas de sus tiendas.
                                </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client5.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="foodservices" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal Food Service</h6>
                        <p>Abastecemos de empaques a las principales cadenas, franquicias de restaurantes, fast food, entre otros. Contamos con un amplio portafolio  de soluciones de empaques para consumo en sitio, exhibir o para llevar así como la oportunidad de adaptar el diseño de los productos acorde a las necesidades del mercado y la personalización del empaque para contribuir al posicionamiento de marca del cliente.
                                </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client4.webp')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="industrial" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal Industrial Consumo</h6>
                        <p>Ofrecemos soluciones innovadoras y personalizadas para satisfacer las necesidades de empaque de empresas dedicadas a la producción de productos de consumo en los segmentos: alimentos, aseo del hogar, protegiendo y garantizando la inocuidad y calidad de su contenido, posicionando la marca del cliente y facilitando su consumo.
                                </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client3.webp')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="agroindustrial" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal Agroindustrial</h6>
                        <p>Atendemos a empresas agroexportadoras que producen y empacan productos agroindustriales como frutas y verduras, entregando altos estándares de calidad e inocuidad, lo que garantiza al final de la cadena, productos frescos capaces de diferenciarse en el punto de venta.
                        </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client1.webp')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="exportation" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>Canal Exportaciones</h6>
                        <p>Nuestra  visión de crecimiento nos ha llevado a atender  canales como  el tradicional, autoservicio, industrial, food service y  agroindustrial, en diferentes mercados internacionales ofreciendo  un portafolio de empaques especializado   de acuerdo al canal  y a la geografía especifica.
                                </p>
                    </div>
                    <div className="prs-clients">
                        <div>
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s">
                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/client2.webp')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients;