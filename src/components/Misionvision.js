import React, { Fragment } from 'react';
import House from '../images/svg/home';
import Hands from '../images/svg/hands';
import ArrowUs from '../images/svg/arrowus';
import World from '../images/svg/world';
import Users from '../images/svg/users';
import Chart from '../images/svg/chartus';
import '../styles/misionvision.css'

const MisionVision = ({ t }) => {
    return (
        <Fragment>
            <div className="Mision-vision_pm">
                <div className="container-vision_mision_pm">
                    <div className="propose">
                        <div className="container-propose">
                            <div className="square-propose"></div>
                            <div className="info-propose">
                                <div>
                                    <h6>{t('nosotros.nuestro_proposito')}</h6>
                                    <p>
                                        {t('nosotros.nuestro_proposito_desc')}
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
                                    <h6>{t('nosotros.mision')}</h6>
                                    <p>
                                        {t('nosotros.mision_desc')}
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
                                    <h6>{t('nosotros.vision')}</h6>
                                    <p>
                                        {t('nosotros.vision_desc')}
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
                                    <h6>{t('nosotros.propuesta_valor')}</h6>
                                    <p>
                                        {t('nosotros.propuesta_valor_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="us-values_pm">
                <div className="container-grid">
                    <h6 className="title-values">{t('nosotros.nuestros_valores')}</h6>
                </div>
                <div className="img-values">
                    <div>
                        <House />
                        <p>{t('nosotros.integridad')}</p>
                    </div>
                    <div>
                        <Hands />
                        <p>{t('nosotros.respeto')}</p>
                    </div>
                    <div>
                        <ArrowUs />
                        <p>{t('nosotros.orientacion')}</p>
                    </div>
                    <div>
                        <World />
                        <p>{t('nosotros.innovacion')}</p>
                    </div>
                    <div>
                        <Users />
                        <p>{t('nosotros.compromiso')}</p>
                    </div>
                    <div>
                        <Chart />
                        <p>{t('nosotros.compromiso_resultados')}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MisionVision;