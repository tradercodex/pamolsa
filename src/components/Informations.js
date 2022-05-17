import React, { Fragment } from 'react';
import LogoUs from '../images/svg/logous';
import '../styles/information.css'
import i18n from "i18next";

const Informations = ({ t }) => {
    return (
        <Fragment>
            <div className="Map_pm container" style={{ background: "#F9F9F9" }}>
                <div className="container-grid_img" style={{ marginTop: "50px", alignItems: "center" }}>
                    <div className="img-map_pm information">
                        <img src={require('../images/img/mappamolsa.webp')} alt="imagen del mapa" />
                    </div>
                    <div className="info-map_pm">
                        <div className="footer-dc text-map_pm" style={{ fontSize: "24px" }}>
                            <LogoUs />
                            <div style={{ letterSpacing: "2px" }}>{t('nosotros.info_1')}</div>
                            <div style={{ letterSpacing: "2px" }}>{t('nosotros.info_2')}</div>
                            <div style={{ letterSpacing: "2px", fontSize: "28px" }} className="bold">{t('nosotros.info_3')}</div>
                            <div style={{ letterSpacing: "2px" }}>{t('nosotros.info_4')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Certifications" style={{ background: "#fff", paddingTop: "30px" }}>
                <div className="container-certifications" style={{ alignItems: "center" }}>
                    <div className="info-certifications">
                        <div>
                            <h6>{t('nosotros.nuestras_certificaciones')}</h6>
                            <span>{t('nosotros.nuestras_certificaciones_1')}</span>
                            <p>
                                {t('nosotros.nuestras_certificaciones_2')}
                            </p>
                        </div>
                    </div>
                    <div className="certifications-companies" style={{ justifyContent: "flex-start" }}>
                        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Informations;