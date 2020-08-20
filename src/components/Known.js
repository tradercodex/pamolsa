import React from 'react';
import '../styles/known.css'
import OurClients from '../components/OurClients'
import WOW from 'wowjs'
import { Link } from 'react-router-dom';

class Known extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div className="Known-pm">
                <div className="container-known">
                    <div className="info-known">
                        <div>
                            <h3
                                className="wow animate__animated animate__fadeInDown"
                                data-wow-duration="2s"
                                data-wow-delay="0.3s"
                            >Conoce nuestros productos</h3>
                            <p
                                className="wow animate__animated animate__fadeInDown"
                                data-wow-duration="2s"
                                data-wow-delay="0.8"
                            >
                                Tenemos más de 20 años consolidándonos en la industria del empaque, con productos innovadores, desarrollados en base a las necesidades del mercado. Nuestro versátil portafolio y materias primas son nuestras fortalezas.
                            </p>
                        </div>
                    </div>
                    <div className="products-known">
                        <div className="container-products_pm">
                            <div className="bioform-pm wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="2.4s"
                            >
                                <img src={require('../images/img/bioformknown.png')} />
                                <p>Bioform</p>
                            </div>
                            <div className="line-products_pm top wow animate__animated animate__fadeInDown"
                                data-wow-duration="2s"
                                data-wow-delay="2.4s"
                            >
                                <img src={require('../images/img/lineproducts.png')} />
                                <p>Línea de productos</p>
                            </div>
                            <div className="use-app_pm wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="2.4"
                            >
                                <img src={require('../images/img/useapplications.png')} />
                                <p>Uso y aplicaciones</p>
                            </div>
                            <div className="material-pm top wow animate__animated animate__fadeInRight"
                                data-wow-duration="2s"
                                data-wow-delay="2.4"
                            >
                                <img src={require('../images/img/material.png')} />
                                <p>Material</p>
                            </div>
                        </div>
                    </div>
                </div>
                <OurClients />
                <div className="container-distributor">
                    <div className="info-distributor_hm">
                        <div>
                            <h3 className="wow animate__animated animate__fadeInLeft"
                                data-wow-duration="2s"
                                data-wow-delay="0.6s">Conoce nuestros distribuidores más cercanos</h3>
                            <p 
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1s">
                                Ingresa y busca tu producto y el distribuidor más cercano a tu úbicación.
                            </p>
                            <Link 
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s"
                            to="/home/distribuidores"><button>Ver distribuidores</button></Link>
                        </div>
                    </div>
                    <div className="img-distributor_hm">
                        <div className="img-distributor"
                           
                        >
                            <div className="square-distributor wow animate__animated animate__fadeIn"
                                 data-wow-duration="2s"
                                 data-wow-delay="1.4s"
                            ></div>
                            <img 
                             className="wow animate__animated animate__fadeInRight"
                             data-wow-duration="2s"
                             data-wow-delay="1.8s"
                            src={require('../images/img/distributor.png')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Known;