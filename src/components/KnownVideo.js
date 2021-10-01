import React, { Fragment } from 'react';
import Play from '../images/svg/play'
import '../styles/known.css'
import ReactPlayer from 'react-player/lazy'

const KnownVideo = ({closeVideoModal, handleShowVideoModal, showVideoModal}) => {

    let modalRef = null;

    const handleClose = (e) => {
        if (modalRef && !modalRef.contains(e.target)) {
            closeVideoModal();
        }
    }

    const OpenVideo = () => {
        handleShowVideoModal();
    }

    return (
        <Fragment>
            <div className="Known-video_pm" onClick={handleClose} style={{position: "relative"}}>
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
                                <img src={require('../images/img/videoimg.webp')} />
                            </div>
                        </div>
                        <div className="play-button_pm wow animate__animated animate__fadeIn"
                            data-wow-duration="2s"
                            data-wow-delay="0.9s">
                            <button onClick={OpenVideo}><Play /></button>
                        </div>
                    </div>
                    <div className="info-known_our">
                        <div>
                            <h4
                                className="wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="0.3s">¿Cómo hacemos nuestros empaques?</h4>
                        </div>
                    </div>
                    {showVideoModal &&
                        <div className="player-wrapper" ref={(node) => { modalRef = node }}>
                            <ReactPlayer className='react-player' playing={false} width="100%" height="100%" volume={0.1} url="https://www.youtube.com/watch?v=pc75XHfJ8dk&feature=youtu.be&ab_channel=PamolsaOficial" />
                        </div>
                    }
                </div>
            </div>
            <div className="Certifications">
                <div className="container-certifications">
                    <div className="info-certifications">
                        <div>
                            <h6>Nuestras Certificaciones</h6>
                            <span>Cumplimos con normas y reglamentos internacionales</span>
                            <p>
                                Comprometidos con nuestros clientes, colaboradores y proveedores buscamos trabajar dentro de estándares internacionales que garanticen la calidad de nuestros productos, procesos y sistemas, así como la mejora continua en la seguridad y salud de nuestros colaboradores.
                                </p>
                        </div>
                    </div>
                    <div className="certifications-companies">
                        <div>
                            <h6 className="companies-title">Certificaciones Internacionales</h6>
                            <div className="companies_us">                               
                                <a href="https://www.sgs.pe/es-es/certified-clients-and-products/certified-client-directory" target="_blank">
                                    <div className="img-company-sgs"></div>
                                </a>
                                <a href="https://www.sgs.pe/es-es/certified-clients-and-products/certified-client-directory" target="_blank">
                                    <div className="img-company-sgiso"></div> 
                                </a>
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
                                <div className="img-company-gplast">
                                </div>
                                <div className="img-company-abe">
                                </div>
                                <div className="img-company-gptw21">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default KnownVideo;