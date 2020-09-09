import React, { Fragment } from 'react';
import '../styles/misionvision.css'

const MisionVision = () => {
    return (
        <Fragment>
            <div className="Mision-vision_pm">
            <div className="container-vision_mision_pm">
                <div className="mision">
                <div className="container-mision">
                    <div className="square-mision"></div>
                    <div className="info-mision">
                        <div>
                            <h6>MISIÓN</h6>
                            <p>
                                Desarrollamos <strong>empaques confiables</strong> que hacen que la vida más <strong>práctica y segura</strong>
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
                                    Ser la mejor opción en soluciones de empaques sostenibles
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promise-value">
                <div className="container-promise_value">
                    <div className="square-promise_value"></div>
                    <div className="info-promise_value">
                        <div>
                            <h6>PROMESA DE VALOR</h6>
                            <p>
                            Somos aliados de nuestros clientes con empaques que evolucionan.<br/><br/> Cumplimos en cantidad y oportunidad
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="values">
            <div className="values-title">
                <h2>Nuestros valores</h2>
                <div className="values-container">

                </div>
            </div>
        </div> */}
        </Fragment>
    );
}

export default MisionVision;