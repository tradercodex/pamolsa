import React, { Fragment } from 'react'
import Sostenibility from '../images/svg/sostenibilidad'
import Vasito from '../images/svg/vasito'
import HandsSbl from '../images/svg/hand'
import Hoja from '../images/svg/hoja'
import UsersSbl from '../images/svg/usersbl'
import PlantSbl from '../images/svg/plantasbl'
import InformDownload from '../images/svg/informdownload'
import Slider from "react-slick";
import i18n from "i18next";

const InformationSostenibility = ({ sostenibilidad2019, sostenibilidad2020, sostenibilidad2021, t }) => {


    const settingsNews = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <Fragment>
            <div className="Container-sb_pm">
                <div className="sb_pm">
                    <div className="header-title">
                        <h2>{t('sostenibilidad.modelo')}</h2>
                        <p>{t('sostenibilidad.modelo_desc')}</p>
                    </div>
                    <div className="models-sb">
                        <div className="model_1">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                {/*{i18n.language === 'es' ? <Sostenibility /> : <img src={require('../images/img/sostenibilidad.png')} alt="sostenibilidad" />}*/}
                                {i18n.language === 'es' ? <Sostenibility /> : <Sostenibility />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#F9F9F9" }}>
                <div className="container-grid">
                    <h2 className="title-container">
                        {t('sostenibilidad.objetivos')}
                    </h2>
                </div>
                <div className="objetives">
                    <div className="objectives-sosten">
                        <PlantSbl />
                        <p>{t('sostenibilidad.objetivos_1')} <span>{t('sostenibilidad.objetivos_1_resaltado')}</span></p>
                    </div>
                    <div className="objectives-sosten">
                        <Vasito />
                        <p>{t('sostenibilidad.objetivos_2')} <span>{t('sostenibilidad.objetivos_2_resaltado')}</span></p>
                    </div>
                    <div className="objectives-sosten">
                        <HandsSbl />
                        <p>{t('sostenibilidad.objetivos_3')} <span>{t('sostenibilidad.objetivos_3_resaltado')}</span> {t('sostenibilidad.objetivos_3_1')}</p>
                    </div>
                    <div className="objectives-sosten">
                        <Hoja />
                        <p>{t('sostenibilidad.objetivos_4')} <span>{t('sostenibilidad.objetivos_4_resaltado')}</span> {t('sostenibilidad.objetivos_4_1')}</p>
                    </div>
                    <div className="objectives-sosten">
                        <UsersSbl />
                        <p>{t('sostenibilidad.objetivos_5')} <span>{t('sostenibilidad.objetivos_5_resaltado')}</span> {t('sostenibilidad.objetivos_5_1')}</p>
                    </div>
                </div>
            </div>
            <div style={{ background: "rgba(0, 82, 134, 0.2)", paddingTop: "70px", paddingBottom: "70px" }}>
                <div className="container-grid">
                    <div className="info-informs">
                        <h2>{t('sostenibilidad.informes')}</h2>
                        <p>{t('sostenibilidad.informes_desc')}</p>
                    </div>
                    <div className="informs-pdfs">
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2019} target="_blank"><InformDownload /></a>
                            <p>{t('sostenibilidad.sostenibilidad')} 2019</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2020} target="_blank"><InformDownload /></a>
                            <p>{t('sostenibilidad.sostenibilidad')} 2020</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2021} target="_blank"><InformDownload /></a>
                            <p>{t('sostenibilidad.sostenibilidad')} 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#fff" }}>
                <div className="">
                    <Slider {...settingsNews} className="stb-slick tablet">
                        <div>
                            <div className="container-grid" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                                <div className="post-sl-sbl">
                                    <div className="square-sl-sbl">
                                    </div>
                                    <div className="img-new_slick">
                                        <img src={require('../images/img/stbslider1.webp')} alt="imagen" />
                                    </div>
                                </div>
                                <div className="info-sl-sbl">
                                    <div className="info-sbl">
                                        <h4 style={{ width: "520px" }}>{t('sostenibilidad.innovacion')}</h4>
                                        <img src={require('../images/img/bioform.webp')} alt="bioform" />
                                        <h6>{t('sostenibilidad.innovacion_1')}</h6>
                                        <p>{t('sostenibilidad.innovacion_1_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-grid" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                                <div className="post-sl-sbl">
                                    <div className="square-sl-sbl">
                                    </div>
                                    <div className="img-new_slick">
                                        <img src={require('../images/img/petpluslider.webp')} alt="imagen" />
                                    </div>
                                </div>
                                <div className="info-sl-sbl">
                                    <div className="info-sbl">
                                        <h4 style={{ width: "520px" }}>{t('sostenibilidad.innovacion')}</h4>
                                        <img src={require('../images/img/petplus.webp')} alt="bioform" />
                                        <p>{t('sostenibilidad.innovacion_2_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </Fragment>
    );
}

export default InformationSostenibility;