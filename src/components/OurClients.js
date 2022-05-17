import React, { useEffect } from 'react';
import Box from '../images/svg/box'
import Buy from '../images/svg/buy'
import Hamburguer from '../images/svg/hamburguer';
import Cartel from '../images/svg/cartel';
import Maiz from '../images/svg/maiz';
import House from '../images/svg/house';
import $ from 'jquery'

const OurClients = ({ t }) => {

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
                            {t('clientes.nuestros')}
                        </h2>
                        <p
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s"
                        >
                            {t('clientes.nuestros_desc')}</p>
                        <div className="footer-client_main">
                            <h6 style={{ color: "#005286" }}
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">{t('clientes.tipos')}</h6>
                            <div className="types-clients wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="2.6s" >
                                <a href="#traditional"><Box /></a>
                                <a href="#autoservices"><Buy /></a>
                                <a href="#foodservices"><Hamburguer /></a>
                                <a href="#industrial"><Cartel /></a>
                                <a href="#agroindustrial"><Maiz /></a>
                                <a href="#exportation"><House /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="default" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.masivos')}</h6>
                        <p>{t('clientes.abastecemos')}
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
                                    <img src={require('../images/img/client6.2.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="traditional" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.tradicional')}</h6>
                        <p>{t('clientes.abastecemos')}
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
                                    <img src={require('../images/img/client5.2.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="autoservices" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.autoservicio')}</h6>
                        <p>{t('clientes.autoservicio_desc')}
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
                                    <img src={require('../images/img/client7.2.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="foodservices" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.foodservice')}</h6>
                        <p>{t('clientes.foodservice_desc')}
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
                                    <img src={require('../images/img/client4.2.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="industrial" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.industrial')}</h6>
                        <p>{t('clientes.industrial_desc')}
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
                                    <img src={require('../images/img/client3.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="agroindustrial" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.agroindustrial')}</h6>
                        <p>{t('clientes.agroindustrial_desc')}
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
                                    <img src={require('../images/img/client1.webp')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="exportation" className="client-info hide">
                    <div className="info-client-footer">
                        <h6 style={{ color: "#005286" }}>{t('clientes.exportaciones')}</h6>
                        <p>{t('clientes.exportaciones_desc')}
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
                                    <img src={require('../images/img/client2.webp')} alt="imagen" />
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