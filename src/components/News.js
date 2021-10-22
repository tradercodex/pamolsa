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
import ReactHtmlParser from 'react-html-parser'
import ReactPlayer from 'react-player/lazy'

const News = ({ handleShowVideoModalSostenibility, match, vacants, news, communities, activities, closeVideoModal, handleShowVideoModal, showVideoModal }) => {
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
                            <img src={require('../images/img/tree.gif')} alt="imagen" />
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
                                                        <h4>Noticias Pamolsa</h4>
                                                    </div>
                                                    <h6>{(item.title).substring(0, 60) + '...'}</h6>
                                                    <div className="text-new">{ReactHtmlParser((item.body).substring(0, 150) + '...')}</div>
                                                    <Link to={`/noticias/${item.id}`}>Ver más</Link>
                                                </div>
                                                <div className="post-new_slick">
                                                    <div className="square-slick">
                                                    </div>
                                                    <div className="img-new_slick">
                                                        <img src={`http://` + item.file.url} alt="imagen" />
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
                                                <h4>Plantas en Perú</h4>
                                            </div>
                                            <h6>Siempre adelante</h6>
                                            <p>En Perú contamos con dos centros de producción y un aliado estratégico, Recicloplas Perú, en los cuales aseguramos la calidad de cada uno de los procesos de fabricación de empaques así como el correcto cierre de ciclo.</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick_us">
                                                <img src={require('../images/img/us1.png')} alt="imagen" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Planta Faucett</h4>
                                            </div>
                                            <h6>Lima</h6>
                                            <p>Planta de producción se encuentra ubicada en el  Callao en un área de  19,000m2 .</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/plantafaucet.jpg')} alt="imagen" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Planta Gambetta</h4>
                                            </div>
                                            <h6>Lima</h6>
                                            <p>Planta de producción inaugurada el 2018 se encuentra ubicada en el  Callao en un área de  16,000m2 .</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/plantagambeta.webp')} alt="imagen"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="Footer-news_us">
                                <div className="container-footer_news_us">
                                    <div className="img-footer_news_us">
                                        <div className="img-footer_new_us">
                                            <StbNews />
                                        </div>
                                    </div>
                                    <div className="info-footer_news_us">
                                        <div>
                                            <h6>Sostenibilidad</h6>
                                            <div className="span">¡Dale Vida a tus residuos con Recicloplas!</div>
                                            <p>
                                            Junto a Recicloplas Perú, aliado estratégico de Pamolsa, reciclamos PET posconsumo para luego procesarlo y producir materia prima de alta calidad que posteriormente es utilizada por Pamolsa para su transformación en productos terminados. Con esto, no solo evitamos que sean depositados en nuestros ríos, mares y rellenos sanitarios, también reducimos los requerimientos de PET virgen, lo cual significa una menor emisión de gases de efecto invernadero y un menor consumo de energía y petróleo.
                                            <br /><br />
                                            Actualmente, Recicloplas  genera ingresos para más de 1,500 familias recicladoras.
                                            <br />
                                            De esta manera contribuimos con el medio ambiente y con la sociedad.
                                            <br /><br />


                                            </p>
                                            <strong style={{ color: "#4D4D4C", fontFamily: "Amble-bold", fontSize: "18px" }}>¡Comprometidos  de verdad!</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/sostenibilidad" ?
                    <div className="News-pm_us" onClick={handleClose} style={{ background: "#fff" }}>
                        <div className="square-us" style={{ background: "#fff", height: "3920px" }}></div>
                        <div className="square-stb">
                            <div className="container-grid sbl" style={{ paddingTop: "290px", alignItems: "center", paddingBottom: "100px" }}>
                                <div className="info-pm">
                                    <div>
                                        <img src={require('../images/img/recicoplas.png')} alt="imagen" />
                                        <h6 style={{ color: "#32711E", marginTop: "30px" }}>Ciclo de cierre de nuestro productos</h6>
                                        <p style={{ marginTop: "30px", marginBottom: "30px" }}>Desde el 2013, nuestro aliado estratégico “Recicloplas Perú” es uno de los principales actores del reciclaje en el país. De esta manera reafirmamos nuestro compromiso con el medio ambiente y con la sociedad mediante la valorización de residuos de plástico posconsumo, generando impacto positivo y sostenible.
                                        </p>
                                        <span style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "16px" }}>¡COMPROMETIDOS DE VERDAD!</span>
                                    </div>
                                </div>

                                <div className="play-known">
                                    <div className="square"></div>
                                    <div className="img-video_known">
                                        <div className="img">
                                            <img src={require('../images/img/obrero.png')} alt="imagen" />
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
                                            <img src={require('../images/img/handice.png')} alt="imagen" />
                                        </div>
                                    </div>
                                    <div className="info-pet-sbl">
                                        <div className="info-sbl" style={{ right: "0px" }}>
                                            <h4>Así cerramos el ciclo del PET en Perú</h4>
                                            <div className="flex-pet-sbl" style={{ display: "flex", justifyContent: "space-between", textAlign: "center", marginTop: "40px" }}>
                                                <div>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">+180 millones</div>
                                                        <div>de envases reciclados</div>
                                                        <div>al año</div>
                                                    </div>
                                                    <PetOne />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">2 líneas</div>
                                                        <div>de reciclaje</div>
                                                        <div>el Callao</div>
                                                    </div>
                                                    <PetTwo />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">+1500</div>
                                                        <div className="bold">recicladores</div>
                                                        <div>en la cadena</div>
                                                    </div>
                                                    <PetThree />
                                                </div>
                                                <div style={{ marginLeft: "50px" }}>
                                                    <div style={{ marginBottom: "80px" }}>
                                                        <div className="bold">+40%</div>
                                                        <div>rPET</div>
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
                                            <h6>Toneladas de PET procesado</h6>
                                        </div>
                                        <p>Además de darle una nueva vida a los residuos posconsumo de PET trabajamos en el correcto aprovechamiento y disposición de los residuos post industriales resultantes de nuestro proceso productivo.</p>
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
                                            <h6>Acuerdo de Producción Limpia</h6>
                                        </div>
                                        <p>Somos la primera empresa de empaques del Perú en firmar un Acuerdo de Producción Limpia junto con el Ministerio del Ambiente y el Ministerio de la Producción. En este acuerdo nos comprometemos a desarrollar estrategias para incrementar el porcentaje de material reciclado post consumo en nuestros productos, minimizar y aprovechar nuestros residuos post industriales, ampliar nuestro portafolio de productos eco amigables y a desarrollar alianzas para la educación en cultura de reciclaje.</p>
                                    </div>
                                    <div className="post-img-card-rigth">
                                        <div className="square-img-card">
                                        </div>
                                        <div className="img-card">
                                            <img src={require('../images/img/postprod.png')} alt="imagen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid community" style={{ marginTop: "120px", alignItems: "center" }}>
                                    <div className="info-container">
                                        <div className="title-green-dark-container">
                                            <h6>¡Comunidades sostenibles!</h6>
                                        </div>
                                        <p>Recicloplas Perú de la mano con sus clientes recolectan  material PET posconsumo  en sus locales con el cual luego se producen  envases de material reciclable.</p>

                                        <span>Reduce, recicla, reúsa.</span>
                                    </div>
                                    <Slider {...settingsReciclopas} className="new-slick work sbl community table">
                                        {
                                            communities && communities.length ?
                                                communities.map(item => (
                                                    <div key={item.id}>
                                                        <div className="card-work">
                                                            <div className="header-work">
                                                                <img src={`http://` + item.file.url} alt="imagen" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h6>{item.title}</h6>
                                                                <p>{ReactHtmlParser((item.description).substring(0, 100) + '...')}</p>
                                                                <Link to={`/sostenibilidad/comunidad/${item.id}`} style={{ marginTop: "0px" }}>Ver más</Link>
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
                                                                <img src={`http://` + item.file.url} alt="imagen" />
                                                            </div>
                                                            <div className="play-button_pm activity">
                                                                <button onClick={handleShowVideoModal}><Play /></button>
                                                            </div>
                                                        </div>
                                                        { showVideoModal &&
                                                            <div className="player-wrapper" ref={(node) => { modalRef = node }}>
                                                                <ReactPlayer className='react-player' playing={false} width="100%" height="100%" volume={0.1} url={item.uri_video} />
                                                            </div>
                                                        }
                                                        <div className="info-post-activity">
                                                            <p>{item.title}</p>
                                                            <span>{item.subtitle}</span>
                                                        </div>
                                                    </div>
                                                )) : ''
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div> : ''
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
                                    <h4 style={{ color: "#009FE3" }}>¡Vacantes disponibles!</h4>
                                    <p>Te estamos buscando</p>
                                </div>
                            </div>
                            <Slider {...settingsWorks} className="new-slick work tablet xs">
                                {
                                    vacants && vacants.length ?
                                        vacants.map(item => (
                                            <div key={item.id}>
                                                <div className="card-work">
                                                    <div className="header-work">
                                                        <img src={`http://` + item.file.url || require('../images/img/work.png')} alt="imagen" />
                                                    </div>
                                                    <div className="card-body">
                                                        <h6>{item.title}</h6>
                                                        <p className="text">{ReactHtmlParser((item.description).substring(0, 110) + '...')}</p>
                                                        <a href={item.job_functions} target="_blank" >Ver más</a>
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
                                        <img src={require('../images/img/workpostula.png')} alt="imagen" />
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
                                    >¿No encontraste
                                    una vancante de tu interés?</h6>
                                    <p
                                        style={{
                                            color: "#fff",
                                            width: "432px",
                                            marginTop: "20px",
                                            fontSize: "14px",
                                            fontFamily: "Amble-light"
                                        }}
                                    >Déjanos tu información y te contactaremos cuando se abra una vacante acorde a tu perfil profesional.</p>
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
                                        >Postulate aquí</button></a>
                                </div>
                            </div>
                            <div className="info-container question" style={{ zIndex: "1", marginTop: "100px" }}>
                                <div className="title-white-container" style={{ position: "relative", width: "250px" }}>
                                    <h6>Preguntas frecuentes</h6>
                                </div>
                            </div>
                            <div className="box-container question" style={{ zIndex: "1", gridColumn: "4/8", marginTop: "100px", display: "flex", justifyContent: "center" }}>
                                <div className="accordion">

                                    <div class="container-accordion">
                                        <details class="default square-accordion">
                                            <summary><BarBox /><span>¿Cuánto tiempo tarda el proceso de selección?</span></summary>
                                            <p>El tiempo varía de acuerdo a cada proceso; pero en promedio es entre 7 y 15 días.</p>
                                        </details>
                                        <details class="primary square-accordion">
                                            <summary><BarBox /><span>¿Puedo enviar mi Currículum Vitae algún correo?</span></summary>
                                            <p>Sí, enviarlo a desarrollo.organizacional@carvajal.com indicando en asunto del correo el nombre del puesto al que postulas. Ejemplo: “Asistente de Endomarketing”.</p>
                                        </details>
                                        <details class="primary square-accordion">
                                            <summary><BarBox /><span>¿Puedo postular a más de una vacante?</span></summary>
                                            <p>Lo importante es que analices si tu experiencia, conocimientos y formación se ajusten a lo que se solicita en la vacante. Si cumples con ello puedes postular.</p>
                                        </details>
                                        <details class="primary square-accordion">
                                            <summary><BarBox /><span>¿Pamolsa paga todos los beneficios de acuerdo a ley?</span> </summary>
                                            <p>Sí, somos una empresa formal y cumplimos con pagar todos los beneficios que la ley exige; adicional a beneficios corporativos que la empresa otorga.</p>
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