import React, { Fragment } from 'react';
import Play from '../images/svg/play'
import '../styles/known.css'
import WOW from 'wowjs'

class KnownVideo extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <Fragment>
                <div className="Known-video_pm">
                    <div className="container-known_video">
                        <div className="play-known">
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="0.3s"
                            >
                            </div>
                            <div className="img-video_known">
                                <div className="img wow animate__animated animate__fadeInLeft"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.6s">
                                    <img src={require('../images/img/videoimg.png')} />
                                </div>
                            </div>
                            <div className="play-button_pm wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="0.9s">
                                <button><Play /></button>
                            </div>
                        </div>
                        <div className="info-known_our">
                            <div>
                                <h4
                                    className="wow animate__animated animate__fadeIn"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.3s">Como hacemos nuestros empaques</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Certifications">
                    <div className="container-certifications">
                        <div className="info-certifications">
                            <div>
                                <h6>Nuestras Certificaciones</h6>
                                <span>Cumplimos con normas y reglamentos internacionales</span>
                                <p>
                                Comprometidos con nuestros clientes, colaboradores y proveedores buscamos trabajar dentro de estandares internacionales que garanticen la calidad de nuestros productos, procesos y sistemas, así como la mejora continua en la seguridad y salud de nuestros colaboradores.
                                </p>
                            </div>
                        </div>
                        <div className="certifications-companies">
                            <div>
                                <h6 className="companies-title">Certificaciones Internacionales</h6>
                                <div className="companies_us">

                                    <div className="img-company-sgs">
                                    </div>
                                    <div className="img-company-sgs">
                                    </div>
                                    <div className="img-company-brc">
                                    </div>
                                </div>
                                <h6 className="companies-title_second">Certificaciones en Gestión Humana</h6>
                                <div className="companies-second_us">
                                <div className="img-company-gp">
                                    </div>
                                    <div className="img-company-gpl">
                                    </div>
                                    <div className="img-company-gpw">
                                    </div>
                                    <div className="img-company-gp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default KnownVideo;