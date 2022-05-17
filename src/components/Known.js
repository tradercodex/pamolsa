import React from 'react';
import '../styles/known.css'
import FoodServices from '../images/svg/foodservice'
import Industrial from '../images/svg/industrial'
import Agroindustrial from '../images/svg/agroindustrial'
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from 'react-scroll'
import ModalFoodService from './ModalFoodService';
import industrial from '../pdf/catalogoindustrial.pdf'
import agroindustrial from '../pdf/catalogoagroindustrial.pdf'

const Known = ({
    closePdfModal, showPdfModal,
    handleShowPdfModal, t
}) => {

    return (
        <div className="Known-pm home">
            <div className="container-known">
                <div className="info-known">
                    <div>
                        <h3
                            className="wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.3s"
                        >{t('home.conoce')}</h3>
                        <p
                            className="wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.8"
                        >
                            {t('home.tenemos')}
                        </p>
                    </div>
                </div>
                <div className="products-known">
                    <div className="container-products_pm">
                        <div className="bioform-pm wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.4"
                        >
                            <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter to="/productos/linea/2">
                                <img src={require('../images/img/lineproducts.webp')} alt="imagen" />
                                <p>{t('home.linea_bioform')}</p>
                            </LinkRouter></Link>
                        </div>
                        <div className="line-products_pm top wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.4"
                        >
                            <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter to="/productos/linea/1">
                                <img src={require('../images/img/foodservices.webp')} alt="imagen" />
                                <p>{t('home.linea_food')}</p>
                            </LinkRouter></Link>
                        </div>
                        <div className="use-app_pm wow animate__animated animate__fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="2.4"
                        >
                            <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter to="/productos/linea/4">
                                <img src={require('../images/img/useapplication.webp')} alt="imagen" />
                                <p>{t('home.linea_industrial')}</p>
                            </LinkRouter></Link>
                        </div>
                        <div className="material-pm top wow animate__animated animate__fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="2.4"
                        >
                            <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter to="/productos/linea/3">
                                <img src={require('../images/img/lineagro.webp')} alt="imagen" />
                                <p>{t('home.linea_agro')}</p>
                            </LinkRouter></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Known-pm">
                <div className="container-title-new">
                    <h6 className="wow animate__animated animate__fadeInLeft"
                        data-wow-duration="2s"
                        data-wow-delay="0.4">{t('home.negocios')}</h6>
                </div>
                <div className="container-known_business">
                    <div className="container-products_business">
                        <div>
                            <div className="line-product_pm wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="0.4"
                            >
                                <FoodServices />
                            </div>
                            <p className="know-lines movil">Food Service</p>
                            <div className="button-cat">
                                <button onClick={handleShowPdfModal} className="wow animate__animated animate__fadeInUp"
                                    data-wow-duration="4s"
                                    data-wow-delay="2.4">{t('home.ver')}
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="line-product_pm wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="0.4"
                            >
                                <Industrial />
                            </div>
                            <p className="know-lines movil">Industrial</p>
                            <div className="button-cat">
                                <a rel="noopener noreferrer" href={industrial} target="_blank"
                                    className="wow animate__animated animate__fadeInUp"
                                    data-wow-duration="4s"
                                    data-wow-delay="2.4">{t('home.ver')}</a>
                            </div>
                        </div>
                        <div>
                            <div className="line-product_pm wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="0.4"
                            >
                                <Agroindustrial />
                            </div>
                            <p className="know-lines movil">{t('home.agroindustrial')}</p>
                            <div className="button-cat">
                                <a rel="noopener noreferrer" href={agroindustrial} target="_blank"
                                    className="wow animate__animated animate__fadeInUp"
                                    data-wow-duration="4s"
                                    data-wow-delay="2.4">{t('home.ver')}</a>
                            </div>
                        </div>
                    </div>
                    {showPdfModal && <ModalFoodService closeModal={closePdfModal} title={t('home.catalogo_food_lista')} t={t} />}
                </div>
            </div>
            <div className="container-distributor">
                <div className="info-distributor_hm">
                    <div>
                        <h3 className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s">{t('home.puntos_venta')}</h3>
                        <p
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1s">
                            {t('home.puntos_venta_cercano')}
                        </p>
                        <LinkRouter
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s"
                            to="/home/distribuidores"><button>{t('home.puntos_venta_cercano_buscar')}</button></LinkRouter>
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
                            src={require('../images/img/distributor.webp')} alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Known;
