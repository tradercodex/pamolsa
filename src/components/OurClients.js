import React from 'react';
import Box from '../images/svg/box'
import Buy from '../images/svg/buy'
import Hamburguer from '../images/svg/hamburguer';
import Cartel from '../images/svg/cartel';
import Maiz from '../images/svg/maiz';
import House from '../images/svg/house';

class OurClients extends React.Component {
    render() {
        return(
            <div className="container" style={{ paddingBottom: "80px" }}>
                <div className="container-grid"
                    style={{ paddingTop: "50px" }}>
                    <div className="info-clients">
                        <div>
                            <h2 className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.6s"
                            >
                                Nuestros Clientes
                    </h2>
                            <span
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="1s"
                            >Canal tradicional</span>
                            <p 
                                className="wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="1.4s"
                                >
                                Son canales de comercialización de empaques desechables. Atienden en sus locales a diferentes tipos de usuarios, pueden vender al por menor o ser grandes mayoristas.</p>
                            <div className="footer-client_main">
                                <h6 
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="1.8s">TIPOS DE CLIENTES</h6>
                                <span 
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="2.2s">Canal tradicional</span>
                                <div className="types-clients wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="2.6s" >
                                    <Box />
                                    <Buy />
                                    <Hamburguer />
                                    <Cartel />
                                    <Maiz />
                                    <House />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prs-clients">
                        <div >
                            <div className="square wow animate__animated animate__fadeIn"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s">

                            </div>
                            <div className="img-video_known wow animate__animated animate__fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="1.8s">
                                <div className="img">
                                    <img src={require('../images/img/clientmain.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurClients;