import React from 'react';
import '../styles/known.css'
import FoodServices from '../images/svg/foodservice'
import Industrial from '../images/svg/industrial'
import Agroindustrial from '../images/svg/agroindustrial'
import { Link, useHistory } from 'react-router-dom';
import ModalFoodService from './ModalFoodService';
import industrial from '../pdf/catalogoindustrial.pdf'
import agroindustrial from '../pdf/catalogoagroindustrial.pdf'

const Known = ({
    closePdfModal, showPdfModal,
    handleShowPdfModal,
}) => {

    const history = useHistory()

    const goLineTwo = () => {
        history.replace('/productos/linea/2')
    }

    const goLineOne = () => {
        history.replace('/productos/linea/1')
    }

    const goLineThree = () => {
        history.replace('/productos/linea/3')
    }

    const goLineFour = () => {
        history.replace('/productos/linea/4')
    }

    return (
        <div className="Known-pm home">
            <div className="container-known">
                <div className="info-known">
                    <div>
                        <h3
                            className="wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.3s"
                        >Conoce nuestras líneas de empaques para alimentos</h3>
                        <p
                            className="wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.8"
                        >
                            Tenemos el empaque que necesitas
                            </p>
                    </div>
                </div>
                <div className="products-known">
                    <div className="container-products_pm">
                        <div className="bioform-pm wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.4"
                        >
                            <Link to="/productos/linea/2">
                                <img src={require('../images/img/lineproducts.png')} alt="imagen" />
                                <p>Línea Ecoamigable Bioform</p>
                            </Link>
                        </div>
                        <div className="line-products_pm top wow animate__animated animate__fadeInDown"
                            data-wow-duration="2s"
                            data-wow-delay="0.4"
                        >
                            <Link to="/productos/linea/1">
                                <img src={require('../images/img/foodservices.png')} alt="imagen" />
                                <p>Línea Food Service</p>
                            </Link>
                        </div>
                        <div className="use-app_pm wow animate__animated animate__fadeInUp"
                            data-wow-duration="2s"
                            data-wow-delay="2.4"
                        >
                            <Link to="/productos/linea/3">
                                <img src={require('../images/img/useapplication.png')} alt="imagen" />
                                <p>Línea Industrial Consumo</p>
                            </Link>
                        </div>
                        <div className="material-pm top wow animate__animated animate__fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="2.4"
                        >
                            <Link to="/productos/linea/4">
                                <img src={require('../images/img/lineagro.png')} alt="imagen" />
                                <p>Línea Agroindustrial</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Known-pm">
                <div className="container-title-new">
                    <h6 className="wow animate__animated animate__fadeInLeft"
                        data-wow-duration="2s"
                        data-wow-delay="0.4">Negocios a los que atendemos</h6>
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
                                    data-wow-delay="2.4">Ver cátalogo
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
                                    data-wow-delay="2.4">Ver cátalogo</a>
                            </div>
                        </div>
                        <div>
                            <div className="line-product_pm wow animate__animated animate__fadeInUp"
                                data-wow-duration="2s"
                                data-wow-delay="0.4"
                            >
                                <Agroindustrial />
                            </div>
                            <p className="know-lines movil">Agroindustrial</p>
                            <div className="button-cat">
                                <a rel="noopener noreferrer" href={agroindustrial} target="_blank"
                                    className="wow animate__animated animate__fadeInUp"
                                    data-wow-duration="4s"
                                    data-wow-delay="2.4">Ver cátalogo</a>
                            </div>
                        </div>
                    </div>
                    {showPdfModal && <ModalFoodService closeModal={closePdfModal} title="Nuestros catálogos Food Service" />}
                </div>
            </div>
            <div className="container-distributor">
                <div className="info-distributor_hm">
                    <div>
                        <h3 className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.6s">Conoce nuestros puntos de ventas más cercanos</h3>
                        <p
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1s">
                            Ingresa tu ubicación y encuentra los puntos de venta más cercanos
                            </p>
                        <Link
                            className="wow animate__animated animate__fadeInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s"
                            to="/home/distribuidores"><button>Buscar</button></Link>
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
                            src={require('../images/img/distributor.png')} alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Known;