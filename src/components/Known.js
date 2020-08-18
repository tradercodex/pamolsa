import React from 'react';
import '../styles/known.css'
import { Link } from 'react-router-dom';

const Known = () => {
    return (
        <div className="Known-pm">
            <div className="container-known">
                <div className="info-known">
                    <div>
                        <h3>Conoce nuestros productos</h3>
                        <p>
                            Tenemos más de 20 años consolidándonos en la industria del empaque, con productos innovadores, desarrollados en base a las necesidades del mercado. Nuestro versátil portafolio y materias primas son nuestras fortalezas.
                        </p>
                    </div>
                </div>
                <div className="products-known">
                    <div className="container-products_pm">
                        <div className="bioform-pm">
                            <img src={require('../images/img/bioformknown.png')} />
                            <p>Bioform</p>
                        </div>
                        <div className="line-products_pm top">
                            <img src={require('../images/img/lineproducts.png')} />
                            <p>Línea de productos</p>
                        </div>
                        <div className="use-app_pm">
                            <img src={require('../images/img/useapplications.png')} />
                            <p>Uso y aplicaciones</p>
                        </div>
                        <div className="material-pm top">
                            <img src={require('../images/img/material.png')} />
                            <p>Material</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-distributor">
                <div className="info-distributor_hm">
                    <div>
                        <h3>Conoce nuestros distribuidores más cercanos</h3>
                        <p>
                            Ingresa y busca tu producto y el distribuidor más cercano a tu úbicación.
                        </p>
                        <Link to="/home/distribuidores"><button>Ver distribuidores</button></Link>
                    </div>
                </div>
                <div className="img-distributor_hm">
                    <div className="img-distributor">
                        <div className="square-distributor"></div>
                        <img src={require('../images/img/distributor.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Known;