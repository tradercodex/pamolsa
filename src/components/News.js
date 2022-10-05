import React, { Fragment, useEffect } from 'react';
import Slider from "react-slick";
import { withRouter, Link } from 'react-router-dom'
import Play from '../images/svg/play'
import '../styles/news.css'
import PetOne from '../images/svg/petone';
import PetTwo from '../images/svg/pettwo';
import PetThree from '../images/svg/petthree';
import PetFour from '../images/svg/petfour';
import ChartSbl from '../images/svg/chartsbl';
import BarBox from '../images/svg/barbox';
import ElipseBlue from '../images/svg/elipseblue';
import StbNews from '../images/svg/sostenibilitynews';
import StbNewsEn from '../images/svg/sostenibilitynews_en';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player/lazy';
import i18n from "i18next";
import BannerWikiempaques from '../images/img/BannerWikiempaques.png'

const News = ({ handleShowVideoModalSostenibility, match, vacants, news, communities, activities, closeVideoModal, handleShowVideoModal, showVideoModal, t }) => {
    let modalRef = null;
    let pathname = match.path

    const handleClose = (e) => {
        if (modalRef && !modalRef.contains(e.target)) {
            closeVideoModal();
        }
    }

    const settingsHome = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
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

    const settingsWorks = {
        dots: true,
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
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

    const settingsReciclopas = {
        dots: true,
        infinite: true,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settingsActivities = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
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

    useEffect(() => {
        document.addEventListener('click', handleClose);
        return () => {
            document.removeEventListener('click', handleClose)
        }
    }, [])

    return (
        <Fragment>
            {
                pathname === "/" ?
                    <div className="News-pm">
                        <div className="tree-new news">
                            <img src={require('../images/img/tree.webp')} alt="imagen" />
                        </div>
                        <div className="square-new"></div>
                        <Slider {...settingsHome} className="new-slick tablet">
                            {
                                news && news.length > 0 ?
                                    news.map(item => (
                                        <div key={item.id}>
                                            <div className="container-news">
                                                <div className="info-new_slick">
                                                    <div className="title-new">
                                                        <h4>{t('home.noticias')}</h4>
                                                    </div>
                                                    <h6>{(i18n.language === 'es' ? item.title : item.title_en).substring(0, 60) + '...'}</h6>
                                                    <Link to={`/noticias/${item.id}`}>{t('leer_mas')}</Link>
                                                </div>
                                                <div className="post-new_slick">
                                                    <div className="square-slick">
                                                    </div>
                                                    <div className="img-new_slick">
                                                        <img src={`https://` + item.file.url} alt="imagen" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : ''
                            }
                        </Slider>
                    </div> : ''
            }

            {
                pathname === "/nosotros" ?
                    <div className="News-pm_us">
                        <div className="square-us"></div>
                        <div className="square-new">
                            <Slider {...settingsHome} className="new-slick plant tablet">
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>{t('nosotros.plantas')}</h4>
                                            </div>
                                            <h6>{t('nosotros.plantas_1')}</h6>
                                            <p>{t('nosotros.plantas_2')}</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick_us">
                                                <img src={require('../images/img/us1.webp')} alt="imagen" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>{t('nosotros.plantas_3')}</h4>
                                            </div>
                                            <h6>{t('nosotros.plantas_4')}</h6>
                                            <p>{t('nosotros.plantas_5')}</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/plantafaucet.webp')} alt="imagen" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>{t('nosotros.plantas_6')}</h4>
                                            </div>
                                            <h6>{t('nosotros.plantas_7')}</h6>
                                            <p>{t('nosotros.plantas_8')}</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/plantagambeta.webp')} alt="imagen" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="Footer-news_us">
                                <div className="container-footer_news_us">
                                    <div className="img-footer_news_us">
                                        <div className="img-footer_new_us">
                                            {i18n.language === 'es' ? <StbNews /> : <StbNewsEn />}
                                        </div>
                                    </div>
                                    <div className="info-footer_news_us">
                                        <div>
                                            <h6>{t('nosotros.sostenibilidad')}</h6>
                                            <div className="span">{t('nosotros.sostenibilidad_1')}</div>
                                            <p>
                                                {t('nosotros.sostenibilidad_2')}
                                                <br /><br />
                                                {t('nosotros.sostenibilidad_3')}
                                                <br />
                                                {t('nosotros.sostenibilidad_4')}
                                                <br /><br />
                                            </p>
                                            <strong style={{ color: "#4D4D4C", fontFamily: "Amble-bold", fontSize: "18px" }}>{t('nosotros.sostenibilidad_5')}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/sostenibilidad" ?
                    (<div className="News-pm_us" onClick={handleClose} style={{ background: "#fff" }}>
                        <div className="square-us" style={{ background: "#fff", height: "3920px" }}></div>
                        <div className="square-stb">
                            <div className="container-grid sbl" style={{ paddingTop: "290px", alignItems: "center", paddingBottom: "100px" }}>
                                <div className="info-pm">
                                    <div>
                                        <img src={require('../images/img/recicoplas.webp')} alt="imagen" />
                                        <h6 style={{ color: "#32711E", marginTop: "30px" }}>{t('sostenibilidad.ciclo_cierre')}</h6>
                                        <p style={{ marginTop: "30px", marginBottom: "30px" }}>{t('sostenibilidad.ciclo_cierre_desc')}
                                        </p>
                                        <span style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "16px" }}>{t('sostenibilidad.comprometidos')}</span>
                                    </div>
                                </div>

                                <div className="play-known">
                                    <div className="square"></div>
                                    <div className="img-video_known">
                                        <div className="img">
                                            <img src={require('../images/img/obrero.webp')} alt="imagen" />
                                        </div>
                                    </div>
                                    <div className="play-button_pm">
                                        <button onClick={handleShowVideoModalSostenibility}><Play /></button>
                                    </div>
                                </div>
                                {showVideoModal &&
                                    <div className="player-wrapper" ref={(node) => { modalRef = node }}>
                                        <ReactPlayer className='react-player' playing={false} width="100%" height="100%" volume={0.1} url="https://youtu.be/Ti8lG7xB4lo" />
                                    </div>
                                }
                            </div>
                            <div>
                                <div className="container-grid pet" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                                    <div className="post-pet-sbl">
                                        <div className="square-pet-sbl">
                                        </div>
                                        <div className="img-new_slick">
                                            <img src={require('../images/img/handice.webp')} alt="imagen" />
                                        </div>
                                    </div>
                                    <div className="info-pet-sbl">
                                        <div className="info-sbl" style={{ right: "0px" }}>
                                            <h4>{t('sostenibilidad.cerramos_ciclos')}</h4>
                                            <div className="flex-pet-sbl" style={{ display: "flex", justifyContent: "space-between", textAlign: "center", marginTop: "40px" }}>
                                                <div>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">{t('sostenibilidad.cerramos_ciclos_1')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_2')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_3')}</div>
                                                    </div>
                                                    <PetOne />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">{t('sostenibilidad.cerramos_ciclos_4')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_5')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_6')}</div>
                                                    </div>
                                                    <PetTwo />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">{t('sostenibilidad.cerramos_ciclos_7')}</div>
                                                        <div className="bold">{t('sostenibilidad.cerramos_ciclos_8')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_9')}</div>
                                                    </div>
                                                    <PetThree />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">{t('sostenibilidad.cerramos_ciclos_10')}</div>
                                                        <div>{t('sostenibilidad.cerramos_ciclos_11')}</div>
                                                    </div>
                                                    <PetFour />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid tonel" style={{ marginTop: "80px", alignItems: "center" }}>
                                    <div className="info-container">
                                        <div className="title-green-container">
                                            <h6>{t('sostenibilidad.toneladas')}</h6>
                                        </div>
                                        <p>{t('sostenibilidad.toneladas_desc')}</p>
                                    </div>
                                    <div className="img-container">
                                        <ChartSbl />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid first" style={{ marginTop: "120px", alignItems: "center" }}>
                                    <div className="info-container">
                                        <div className="title-green-dark-container">
                                            <h6>{t('sostenibilidad.acuerdo')}</h6>
                                        </div>
                                        <p>{t('sostenibilidad.acuerdo_desc')}</p>
                                    </div>
                                    <div className="post-img-card-rigth">
                                        <div className="square-img-card">
                                        </div>
                                        <div className="img-card">
                                            <img src={require('../images/img/postprod.webp')} alt="imagen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid community" style={{ marginTop: "120px", alignItems: "center" }}>
                                    <div className="info-container">
                                        <div className="title-green-dark-container">
                                            <h6>{t('sostenibilidad.comunidades')}</h6>
                                        </div>
                                        <p>{t('sostenibilidad.comunidades_desc')}</p>

                                        <span>{t('sostenibilidad.comunidades_lema')}</span>
                                    </div>
                                    <Slider {...settingsReciclopas} className="new-slick work sbl community table">
                                        {
                                            communities && communities.length ?
                                                communities.map(item => (
                                                    <div key={item.id}>
                                                        <div className="card-work">
                                                            <div className="header-work">
                                                                <img src={`https://` + item.file.url} alt="imagen" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h6>{i18n.language === 'es' ? item.title : item.title_en}</h6>
                                                                <p>{ReactHtmlParser((i18n.language === 'es' ? item.description : item.description_en).substring(0, 100) + '...')}</p>
                                                                <Link to={`/sostenibilidad/comunidad/${item.id}`} style={{ marginTop: "0px" }}>{t('leer_mas')}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : ''
                                        }
                                    </Slider>
                                </div>
                            </div>
                            <div style={{
                                position: "absolute",
                                bottom: "0",
                                zIndex: "-1"
                            }}>
                                <div className="container-grid videos" style={{ alignItems: "flex-end", paddingBottom: "0px", paddingTop: "100px" }} onClick={handleClose}>
                                    <div className="elipse-work-videos" onClick={handleClose}></div>
                                    <Slider {...settingsActivities} className="new-slick work activity tablet">
                                        {
                                            activities && activities.length ?
                                                activities.map(item => (
                                                    <div className="" key={item.id}>
                                                        <div className="post-pet-sbl activity">
                                                            <div className="square-pet-sbl activity"></div>
                                                            <div className="img-new_slick activity">
                                                                <img src={`https://` + item.file.url} alt="imagen" />
                                                            </div>
                                                            <div className="play-button_pm activity">
                                                                <button onClick={handleShowVideoModal}><Play /></button>
                                                            </div>
                                                        </div>
                                                        {showVideoModal &&
                                                            <div className="player-wrapper" ref={(node) => { modalRef = node }}>
                                                                <ReactPlayer className='react-player' playing={false} width="100%" height="100%" volume={0.1} url={item.uri_video} />
                                                            </div>
                                                        }
                                                        <div className="info-post-activity">
                                                            <p>{i18n.language === 'es' ? item.title : item.title_en}</p>
                                                            <span>{item.subtitle}</span>
                                                        </div>
                                                    </div>
                                                )) : ''
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>) : ''
            }

            {
                pathname === "/sostenibilidad" && (
                    <a href="https://wikiempaques.carvajalempaques.com/" target="_blank" rel="noopener noreferrer">
                        <img src={BannerWikiempaques} alt="Banner Wikiempaques" />
                    </a>)
            }

            {
                pathname === "/trabaja-con-nosotros" ?
                    <div className="container workwithme" style={{ background: "#F9F9F9" }}>
                        <div className="square-new workwithme" style={{ top: "0", height: "1994px" }}></div>
                        <div className="container-grid work" style={{ paddingTop: "260px" }}>
                            <div className="info-new_slick"
                                style={{
                                    gridColumn: "1/4",
                                    justifyContent: "center",
                                    position: "relative",
                                    zIndex: 1000,
                                    display: "flex",
                                    marginTop: "150px"
                                }}
                            >
                                <div className="title-new">
                                    <h4 style={{ color: "#009FE3" }}>{t('trabaja.vacantes')}</h4>
                                    <p>{t('trabaja.buscando')}</p>
                                </div>
                            </div>
                            <Slider {...settingsWorks} className="new-slick work tablet xs">
                                {
                                    vacants && vacants.length ?
                                        vacants.map(item => (
                                            <div key={item.id}>
                                                <div className="card-work">
                                                    <div className="header-work">
                                                        <img src={`https://` + item.file.url || require('../images/img/work.webp')} alt="imagen" />
                                                    </div>
                                                    <div className="card-body">
                                                        <h6>{i18n.language === 'es' ? item.title : item.title_en}</h6>
                                                        <p className="text">{ReactHtmlParser((i18n.language === 'es' ? item.description : item.description_en).substring(0, 110) + '...')}</p>
                                                        <a href={item.job_functions} target="_blank" rel="noopener noreferrer">{t('leer_mas')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : ''
                                }
                            </Slider>
                        </div>
                        <div className="container-grid elipse" style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                            <ElipseBlue />
                            <div className="play-known elipse" style={{ gridColumn: "2/4", left: "0px", zIndex: "1", top: "0px" }}>
                                <div className="square" style={{ background: "#1F6795" }}></div>
                                <div className="img-video_known">
                                    <div className="img">
                                        <img src={require('../images/img/workpostula.webp')} alt="imagen" />
                                    </div>
                                </div>
                            </div>
                            <div className="info-pm_work"
                                style={{
                                    position: "relative",
                                    zIndex: "1",
                                    gridColumn: "4/8",
                                    marginLeft: "0px"
                                }}
                            >
                                <div>
                                    <h6
                                        style={{
                                            color: "#fff",
                                            width: "383px",
                                            fontSize: "50px",
                                            fontFamily: "Amble-bold",
                                            marginTop: "150px"
                                        }}
                                    >{t('trabaja.no_encontraste')}</h6>
                                    <p
                                        style={{
                                            color: "#fff",
                                            width: "432px",
                                            marginTop: "20px",
                                            fontSize: "14px",
                                            fontFamily: "Amble-light"
                                        }}
                                    >{t('trabaja.no_encontraste_desc')}</p>
                                    <a href="/trabaja-con-nosotros/postúlate">
                                        <button
                                            style={{
                                                color: "#fff",
                                                marginTop: "20px",
                                                fontSize: "14px",
                                                fontFamily: "Amble-bold",
                                                borderRadius: "30px",
                                                background: "#009FE3",
                                                border: "none",
                                                padding: "10px 30px",
                                                outline: "none",
                                                cursor: "pointer"
                                            }}
                                        >{t('trabaja.postulate')}</button></a>
                                </div>
                            </div>
                            <div className="info-container question" style={{ zIndex: "1", marginTop: "100px" }}>
                                <div className="title-white-container" style={{ position: "relative", width: "250px" }}>
                                    <h6>{t('trabaja.preguntas')}</h6>
                                </div>
                            </div>
                            <div className="box-container question" style={{ zIndex: "1", gridColumn: "4/8", marginTop: "100px", display: "flex", justifyContent: "center" }}>
                                <div className="accordion">

                                    <div className="container-accordion">
                                        <details className="default square-accordion">
                                            <summary><BarBox /><span>{t('trabaja.tiempo')}</span></summary>
                                            <p>{t('trabaja.tiempo_res')}</p>
                                        </details>
                                        <details className="primary square-accordion">
                                            <summary><BarBox /><span>{t('trabaja.puedo')}</span></summary>
                                            <p>{t('trabaja.puedo_res')}</p>
                                        </details>
                                        <details className="primary square-accordion">
                                            <summary><BarBox /><span>{t('trabaja.postular')}</span></summary>
                                            <p>{t('trabaja.postular_res')}</p>
                                        </details>
                                        <details className="primary square-accordion">
                                            <summary><BarBox /><span>{t('trabaja.paga')}</span> </summary>
                                            <p>{t('trabaja.paga_res')}</p>
                                        </details>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
        </Fragment >
    );
}

export default withRouter(News);