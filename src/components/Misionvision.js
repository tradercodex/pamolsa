import React, { Fragment } from 'react';
import House from '../images/svg/home';
import Hands from '../images/svg/hands';
import ArrowUs from '../images/svg/arrowus';
import World from '../images/svg/world';
import Users from '../images/svg/users';
import Chart from '../images/svg/chartus';
import '../styles/misionvision.css'

const MisionVision = () => {
    return (
        <Fragment>
            <div className="Mision-vision_pm">
            <div className="container-vision_mision_pm">
            <div className="propose">
                <div className="container-propose">
                    <div className="square-propose"></div>
                    <div className="info-propose">
                        <div>
                            <h6>NUESTRO PROPÓSITO</h6>
                            <p>
                            Impulsamos el desarrollo económico y social haciendo las cosas bien. 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mision">
                <div className="container-mision">
                    <div className="square-mision"></div>
                    <div className="info-mision">
                        <div>
                            <h6>MISIÓN</h6>
                            <p>
                            Desarrollamos, producimos y comercializamos empaques rígidos para alimentos, innovadores y de alta calidad, que hacen la vida más práctica y segura, creando valor de forma sostenible para nuestros socios, consumidores y comunidad.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="vision">
                    <div className="container-vision">
                        <div className="square-vision"></div>
                        <div className="info-vision">
                            <div>
                                <h6>VISIÓN</h6>
                                <p>
                                Ser la mejor opción en soluciones de empaques sostenibles.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vision">
                    <div className="container-vision">
                        <div className="square-vision"></div>
                        <div className="info-vision">
                            <div>
                                <h6>Propuesta de valor</h6>
                                <p>
                                Escuchamos al mundo para crear soluciones de empaques prácticos y confiables que evolucionan.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="us-values_pm">
                <div className="container-grid">
                    <h6 className="title-values">Nuestros valores</h6>
                </div>
                <div className="img-values">
                    <div>
                        <House />
                        <p>Integridad</p>
                    </div>
                    <div>
                        <Hands />
                        <p>Respeto</p>
                    </div>
                    <div>
                        <ArrowUs />
                        <p>Orientación al cliente y usuario</p>
                    </div>
                    <div>
                        <World />
                        <p>Innovación</p>
                    </div>
                    <div>
                        <Users />
                        <p>Compromiso social</p>
                    </div>
                    <div>
                        <Chart />
                        <p>Compromiso con los resultados</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MisionVision;