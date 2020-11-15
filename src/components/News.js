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

const News = ({ match, vacants, news, communities, activities, closeVideoModal, handleShowVideoModal, showVideoModal }) => {
    let modalRef = null;
    let pathname = match.path

    const handleClose = (e) => {
        console.log('Hola perros')
        if (modalRef && !modalRef.contains(e.target)) {
            closeVideoModal();
        }
    }

    const settingsHome = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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

    useEffect(()=>{
        document.addEventListener('click', handleClose);
        return () => {
            document.removeEventListener('click', handleClose)
        }
    },[])

    return (
        <Fragment>
            {
                pathname === "/" ?
                    <div className="News-pm">
                        <div className="tree-new news">
                            <img src={require('../images/img/tree.gif')} />
                        </div>
                        <div className="square-new"></div>
                        <Slider {...settingsHome} className="new-slick">
                            {
                                news && news.length > 0 ?
                                    news.map(item => (
                                        <div>
                                            <div className="container-news">
                                                <div className="info-new_slick">
                                                    <div className="title-new">
                                                        <h4>Noticias Pamolsa</h4>
                                                    </div>
                                                    <h6>{(item.title).substring(0, 60) + '...'}</h6>
                                                    <p>{ReactHtmlParser((item.body).substring(0, 150) + '...')}</p>
                                                    <Link to={`/noticias/${item.id}`}>Ver más</Link>
                                                </div>
                                                <div className="post-new_slick">
                                                    <div className="square-slick">
                                                    </div>
                                                    <div className="img-new_slick">
                                                        <img src={`http://` + item.file.url} />
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
                            <Slider {...settingsHome} className="new-slick">
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Plantas del producción</h4>
                                            </div>
                                            <h6>Planta de Gambeta</h6>
                                            <p>Contamos con las mejores instalaciones y plantas para asegurar la cantidad y un correcto proceso de fabricación en cada una de sus etapas.<br /><br /> La Planta de Gambeta cuenta con 16,000 M2 </p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick_us">
                                                <img src={require('../images/img/us1.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">

                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Plantas del Perú</h4>
                                            </div>
                                            <h6>Nuestra línea 100% natural Bioform</h6>
                                            <p>Bioformes la nueva tendencia eco-amigable de Pamolsa.Es una línea de productos elaborados con bagazo de caña de azucar y otros elementos naturales, con el cual buscamos contribuir al cuidado del medio ambiente y así promover nuestro compromiso con desarrollo sostenible.</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/pruebanew.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="container-news">
                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Plantas del Perú</h4>
                                            </div>
                                            <h6>Nuestra línea 100% natural Bioform</h6>
                                            <p>Bioformes la nueva tendencia eco-amigable de Pamolsa.Es una línea de productos elaborados con bagazo de caña de azucar y otros elementos naturales, con el cual buscamos contribuir al cuidado del medio ambiente y así promover nuestro compromiso con desarrollo sostenible.</p>
                                        </div>
                                        <div className="post-new_slick_us">
                                            <div className="square-slick">
                                            </div>
                                            <div className="img-new_slick">
                                                <img src={require('../images/img/food.jpg')} />
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
                                            <div className="span">¡Dale vida a tus residuos con recicloplas!</div>
                                            <p>
                                                En Recicloplas Perú, planta de reciclaje de Pamolsa , reciclamos PET posconsumo para luego  procesarlo y producir  materia prima de alta calidad que posteriormente es utilizada por Pamolsa para su transformación en productos terminados. Con esto, no solo evitamos que sean depositados en nuestros ríos, mares y rellenos sanitarios, también reducimos los requerimientos de PET virgen, lo cual significa una menor emisión de gases de efecto invernadero y un menor consumo de energía y petróleo.
                                            <br /><br />
                                            Actualmente Recicloplas  genera ingresos para más de 1,500 familias recicladoras.
                                            De esta manera contribuimos con el medio ambiente y con la sociedad.
                                            <br /><br />
                                                <strong style={{ fontFamily: "Amble-bold", fontSize: "18px" }}>¡Comprometidos  de verdad!</strong>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/sostenibilidad" ?
                    <div className="News-pm_us" style={{ background: "#f9f9f9" }}>
                        <div className="square-us" style={{ background: "#f9f9f9", height: "3920px" }}></div>
                        <div className="square-stb">
                            <div className="container-grid" style={{ paddingTop: "290px", alignItems: "center", paddingBottom: "100px" }}>
                                <div className="info-pm">
                                    <div>
                                        <img src={require('../images/img/recicoplas.png')} alt="" />
                                        <h6 style={{ color: "#32711E", marginTop: "30px" }}>Ciclo de cierre de nuestro productos</h6>
                                        <p style={{ marginTop: "30px", marginBottom: "30px" }}>Desde el 2013, nuestra operación de reciclaje “Recicloplas Perú” es una de los principales
                                        actores del reciclaje en el Perú. De esta manera reafirmamos nuestros compromiso con
                                        el medio ambiente y con la sociedad mediante la valorización de residuos de plástico
                                        posconsumo, generando un impacto positivo y sostenible.
                                        </p>
                                        <span style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "16px" }}>¡COMPROMETIDOS DE VERDAD!</span>
                                    </div>
                                </div>
                                <div className="play-known">
                                    <div className="square"></div>
                                    <div className="img-video_known">
                                        <div className="img">
                                            <img src={require('../images/img/obrero.png')} />
                                        </div>
                                    </div>
                                    <div className="play-button_pm">
                                        <button><Play /></button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                                    <div className="post-pet-sbl">
                                        <div className="square-pet-sbl">
                                        </div>
                                        <div className="img-new_slick">
                                            <img src={require('../images/img/handice.png')} />
                                        </div>
                                    </div>
                                    <div className="info-pet-sbl">
                                        <div className="info-sbl" style={{ right: "0px" }}>
                                            <h4>Así cerramos el ciclo del PET en Perú</h4>
                                            <div className="" style={{ display: "flex", justifyContent: "space-between", textAlign: "center", marginTop: "40px" }}>
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
                                <div className="container-grid" style={{ marginTop: "80px", alignItems: "center" }}>
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
                                <div className="container-grid" style={{ marginTop: "120px", alignItems: "center" }}>
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
                                            <img src={require('../images/img/postprod.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid" style={{ marginTop: "120px", alignItems: "center" }}>
                                    <div className="info-container">
                                        <div className="title-green-dark-container">
                                            <h6>¡Comunidades sostenibles!</h6>
                                        </div>
                                        <p>Recicloplas Perú de la mano con sus clientes recolectan  material PET posconsumo  en sus locales con el cual luego se producen  envases de material reciclable.</p>

                                        <span>Reduce, recicla, reúsa.</span>
                                    </div>
                                    <Slider {...settingsReciclopas} className="new-slick work sbl">
                                        {
                                            communities && communities.length ?
                                                communities.map(item => (
                                                    <div key={item.id}>
                                                        <div className="card-work">
                                                            <div className="header-work">
                                                                <img src={`http://` + item.file.url} />
                                                            </div>
                                                            <div className="card-body">
                                                                <h6>{item.title}</h6>
                                                                <p>{ReactHtmlParser((item.description).substring(0, 110) + '...')}</p>
                                                                <button>Ver más</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : ''
                                        }
                                    </Slider>
                                </div>
                            </div>
                            <div>
                                <div className="container-grid" style={{ alignItems: "flex-end", paddingBottom: "0px", paddingTop: "100px" }} onClick={handleClose}>
                                    <div className="elipse-work-videos" onClick={handleClose}></div>
                                    <Slider {...settingsActivities} className="new-slick work activity">
                                        {
                                            activities && activities.length ?
                                                activities.map(item => (
                                                    <div className="" key={item.id}>
                                                        <div className="post-pet-sbl activity">
                                                            <div className="square-pet-sbl activity"></div>
                                                            <div className="img-new_slick activity">
                                                                <img src={`http://` + item.file.url} />
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
                    <div className="container" style={{ background: "#F9F9F9" }}>
                        <div className="square-new" style={{ top: "0", height: "1994px" }}></div>
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
                            <Slider {...settingsWorks} className="new-slick work">
                                {
                                    vacants && vacants.length ?
                                        vacants.map(item => (
                                            <div key={item.id}>
                                                <div className="card-work">
                                                    <div className="header-work">
                                                        <img src={require('../images/img/work.png')} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h6>{item.title}</h6>
                                                        <p>{ReactHtmlParser((item.description).substring(0, 110) + '...')}</p>
                                                        <button>Ver más</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : ''
                                }
                            </Slider>
                        </div>
                        <div className="container-grid" style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                            <ElipseBlue />
                            <div className="play-known" style={{ gridColumn: "2/4", left: "0px", zIndex: "1", top: "0px" }}>
                                <div className="square" style={{ background: "#1F6795" }}></div>
                                <div className="img-video_known">
                                    <div className="img">
                                        <img src={require('../images/img/workpostula.png')} />
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
                                    <Link to="/trabaja-con-nosotros/postúlate">
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
                                        >Postulate aquí</button></Link>
                                </div>
                            </div>
                            <div className="info-container" style={{ zIndex: "1", marginTop: "80px" }}>
                                <div className="title-white-container" style={{ position: "relative", width: "250px" }}>
                                    <h6>Preguntas frecuentes</h6>
                                </div>
                            </div>
                            <div className="box-container" style={{ zIndex: "1", gridColumn: "4/8", marginTop: "80px", display: "flex", justifyContent: "center" }}>
                                <div className="accordion">
                                    <li className="box">
                                        <div className="box-header">
                                            <BarBox />
                                            <p style={{ fontFamily: "Amble-bold", textDecoration: "none" }}>¿Cuánto tiempo tarda el proceso de selección?</p>
                                        </div>
                                        <div className="box-informs">
                                            <div style={{ padding: "10px 10px 0px 10px", fontFamily: "Amble-light", fontSize: "14px", color: "4d4d4d" }}>
                                                <span>El tiempo varía de acuerdo a cada proceso; pero en promedio es entre 7 y 15 días.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="box">
                                        <div className="box-header">
                                            <BarBox />
                                            <p style={{ fontFamily: "Amble-bold", textDecoration: "none" }}>¿Puedo enviar mi Currículum Vitae algún correo?</p>
                                        </div>
                                        <div className="box-informs">
                                            <div style={{ padding: "10px 10px 0px 10px", fontFamily: "Amble-light", fontSize: "14px", color: "4d4d4d" }}>
                                                <span>El tiempo varía de acuerdo a cada proceso; pero en promedio es entre 7 y 15 días.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="box">
                                        <div className="box-header">
                                            <BarBox />
                                            <p style={{ fontFamily: "Amble-bold", textDecoration: "none" }}>¿Puedo postular a más de una vacante?</p>
                                        </div>
                                        <div className="box-informs">
                                            <div style={{ padding: "10px 10px 0px 10px", fontFamily: "Amble-light", fontSize: "14px", color: "4d4d4d" }}>
                                                <span>El tiempo varía de acuerdo a cada proceso; pero en promedio es entre 7 y 15 días.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="box">
                                        <div className="box-header">
                                            <BarBox />
                                            <p style={{ fontFamily: "Amble-bold", textDecoration: "none" }}>¿Pamolsa paga todos los beneficios de acuerdo a ley? </p>
                                        </div>
                                        <div className="box-informs">
                                            <div style={{ padding: "10px 10px 0px 10px", fontFamily: "Amble-light", fontSize: "14px", color: "4d4d4d" }}>
                                                <span>El tiempo varía de acuerdo a cada proceso; pero en promedio es entre 7 y 15 días.</span>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
        </Fragment >
    );
}

export default withRouter(News);