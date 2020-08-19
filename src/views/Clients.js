import React, { Fragment } from 'react';
import Header from '../components/Header';
import ClientsComponent from '../components/Clients'
import Footer from '../components/Footer'
import Slicks from '../components/Slicks';
import Box from '../images/svg/box'
import Buy from '../images/svg/buy'
import Hamburguer from '../images/svg/hamburguer';
import Cartel from '../images/svg/cartel';
import Maiz from '../images/svg/maiz';
import House from '../images/svg/house';

const Clients = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <div className="container" style={{ paddingBottom: "80px" }}>
                <div className="container-grid"
                    style={{ paddingTop: "50px" }}>
                    <div className="info-clients">
                        <div>
                            <h2>
                                Creciendo y mejorando con ustedes
                    </h2>
                            <span>Canal tradicional</span>
                            <p>Son canales de comercialización de empaques desechables. Atienden en sus locales a diferentes tipos de usuarios, pueden vender al por menor o ser grandes mayoristas.</p>
                            <div className="footer-client_main">
                                <h6>TIPOS DE CLIENTES</h6>
                                <span>Canal tradicional</span>
                                <div className="types-clients">
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
                        <div>
                            <div className="square">

                            </div>
                            <div className="img-video_known">
                                <div className="img">
                                    <img src={require('../images/img/clientmain.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientsComponent />
            <Footer />
        </Fragment>
    );
}

export default Clients;