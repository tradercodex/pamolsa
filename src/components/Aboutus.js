import React from 'react';
import Planta from '../images/svg/planta';
import Colaborator from '../images/svg/colaboradores';
import Families from '../images/svg/families';
import Machine from '../images/svg/machine';
import Book from '../images/svg/book';
import Chart from '../images/svg/chartus';
import Logo from '../images/svg/logo';
import i18n from "i18next";

const AboutUs = ({ t }) => {
    return (
        <>
            <div className="container-informations footer">
                <div className="info-carbajal about">
                    <div>
                        <img src={require('../images/img/aboutcarbajal.webp')} alt="imagen" />
                        <p>
                            {t('nosotros.somos')}
                        </p>
                    </div>
                </div>
                <div className="img-carbajal about">
                    <div className="wc">
                        <div className="square-carbajal"></div>
                        <img src={require('../images/img/carbajal.webp')} />
                    </div>
                </div>
            </div>
            <div className="container-informations present" style={{ background: "#fff", marginTop: "0" }}>
                <div className="info-map_pm title">
                    <div>
                        <span>{t('nosotros.desc_1')}</span>
                        <h6>{t('nosotros.desc_2')}</h6>
                        <span>{t('nosotros.desc_3')}</span>
                    </div>
                </div>
            </div>
            <div className="Map_pm container">
                <div className="container-grid_img">
                    <div className="img-map_pm">
                        {i18n.language === 'es' ? <img src={require('../images/img/mapcarbajal.webp')} /> : <img src={require('../images/img/mapcarbajal_en.png')} />}
                    </div>
                    <div className="info-map_pm">
                        <div className="info-map-flex">
                            <div className="" style={{ width: "100%" }}>
                                <div className="map-footer-none">
                                    <span>{t('nosotros.desc_1')}</span>
                                    <h6>{t('nosotros.desc_2')}</h6>
                                    <span>{t('nosotros.desc_3')}</span>
                                </div>
                                <div className="text-map_pm">
                                    <div className="skills-gc">
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Planta />
                                            </div>
                                            <strong>12</strong>
                                            <p>{t('nosotros.num_plantas')}</p>
                                        </div>
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Colaborator />
                                            </div>
                                            <strong>6,200</strong>
                                            <p>{t('nosotros.num_colaboradores')}</p>
                                        </div>
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Families />
                                            </div>
                                            <strong>2,700</strong>
                                            <p>{t('nosotros.num_clientes')}</p>
                                        </div>
                                    </div>
                                    <div className="skills-gc">
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Machine />
                                            </div>
                                            <strong>1000</strong>
                                            <p>{t('nosotros.num_maquinas')}</p>
                                        </div>
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Book />
                                            </div>
                                            <strong>10000</strong>
                                            <p>{t('nosotros.num_skus')}</p>
                                        </div>
                                        <div className="pm-inf_sk ma">
                                            <div>
                                                <Chart />
                                            </div>
                                            <strong>USD$430mm</strong>
                                            <p>{t('nosotros.num_ventas')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-dc text-map_pm map-footer-none">
                            <div>{t('nosotros.somos_1')}</div>
                            <div className="bold">{t('nosotros.somos_2')}</div>
                            <div>{t('nosotros.somos_3')}</div><div>{t('nosotros.somos_4')}</div>
                        </div>
                    </div>
                </div>
                <div className="footer-dc text-map_pm tablet">
                    <div>{t('nosotros.somos_1')}</div>
                    <div className="bold">{t('nosotros.somos_2')}</div>
                    <div>{t('nosotros.somos_3')}</div><div>{t('nosotros.somos_4')}</div>
                </div>
            </div>
            <div className="About-us_pm">
                <div className="container-about_us">
                    <div className="info-about">
                        <div>
                            <Logo />
                            <h3>{t('nosotros.quienes_somos')}</h3>
                            <p>
                                {t('nosotros.quienes_somos_desc')}
                            </p>
                        </div>
                    </div>
                    <div className="card-about">
                        <div className="square us">
                        </div>
                        <div className="img-about_us">
                            <div className="img">
                                <img src={require('../images/img/boyspamolsa.webp')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;