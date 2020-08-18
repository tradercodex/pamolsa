import React, { Fragment } from 'react';
import Slider from "react-slick";
import { withRouter, Link } from 'react-router-dom'
import '../styles/news.css'
import zIndex from '@material-ui/core/styles/zIndex';

const News = ({ match }) => {

    let pathname = match.path

    const settingsNews = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
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
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
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
            {
                pathname === "/" ?
                    <div className="News-pm">
                        <div className="tree-new">
                            <img src={require('../images/img/newtree.png')} />
                        </div>
                        <div className="square-new"></div>
                        <Slider {...settingsNews} className="new-slick">
                            <div>
                                <div className="container-news">
                                    <div className="info-new_slick">
                                        <div className="title-new">
                                            <h4>Noticias Pamolsa</h4>
                                        </div>
                                        <h6>Nuestra línea 100% natural Bioform</h6>
                                        <p>Bioformes la nueva tendencia eco-amigable de Pamolsa.Es una línea de productos elaborados con bagazo de caña de azucar y otros elementos naturales, con el cual buscamos contribuir al cuidado del medio ambiente y así promover nuestro compromiso con desarrollo sostenible.</p>
                                    </div>
                                    <div className="post-new_slick">
                                        <div className="square-slick">
                                        </div>
                                        <div className="img-new_slick">
                                            <img src={require('../images/img/newslickone.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-news">
                                    <div className="info-new_slick">
                                        <div className="title-new">
                                            <h4>Noticias Pamolsa</h4>
                                        </div>
                                        <h6>Nuestra línea 100% natural Bioform</h6>
                                        <p>Bioformes la nueva tendencia eco-amigable de Pamolsa.Es una línea de productos elaborados con bagazo de caña de azucar y otros elementos naturales, con el cual buscamos contribuir al cuidado del medio ambiente y así promover nuestro compromiso con desarrollo sostenible.</p>
                                    </div>
                                    <div className="post-new_slick">
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
                                            <h4>Noticias Pamolsa</h4>
                                        </div>
                                        <h6>Nuestra línea 100% natural Bioform</h6>
                                        <p>Bioformes la nueva tendencia eco-amigable de Pamolsa.Es una línea de productos elaborados con bagazo de caña de azucar y otros elementos naturales, con el cual buscamos contribuir al cuidado del medio ambiente y así promover nuestro compromiso con desarrollo sostenible.</p>
                                    </div>
                                    <div className="post-new_slick">
                                        <div className="square-slick">
                                        </div>
                                        <div className="img-new_slick">
                                            <img src={require('../images/img/food.jpg')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="Footer-news">
                            <div className="container-footer_news">
                                <div className="img-footer_news">
                                    <div className="squeare-footer_new">

                                    </div>
                                    <div className="img-footer_new">
                                        <img src={require('../images/img/pruebanew.png')} />
                                    </div>
                                </div>
                                <div className="info-footer_news">
                                    <div>
                                        <h6>Calidad y compromiso con las personas</h6>
                                        <p>
                                            El compromiso con nuestros clientes, proveedores y colaboradores hacen que nos dediquemos a ser mejores en nuestras operaciones, la calidad de nuestros productos y servicios, y el mejoramiento de nuestro ambiente de trabajo. Nuestra labor se ve reflejada en la obtención de los siguientes certificados internacionales
                                </p>
                                        <div className="companies">
                                            <div className="img-company-sgs">
                                            </div>
                                            <div className="img-company-sgs">
                                            </div>
                                            <div className="img-company-brc">
                                            </div>
                                        </div>
                                        <div className="companies-second">
                                            <div className="img-company-gp">
                                            </div>
                                            <div className="img-company-gpl">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    ''
            }

            {
                pathname === "/nosotros" ?
                    <div className="News-pm_us">
                        <div className="square-us"></div>
                        <div className="square-new">
                            <Slider {...settingsNews} className="new-slick">
                                <div>
                                    <div className="container-news">

                                        <div className="info-new_slick">
                                            <div className="title-new">
                                                <h4>Plantas del Perú</h4>
                                            </div>
                                            <h6>Planta de Lima</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                                            <img src={require('../images/img/sostenibility.png')} />
                                        </div>
                                    </div>
                                    <div className="info-footer_news_us">
                                        <div>
                                            <h6>Sostenibilidad</h6>
                                            <span>¡Dale vida a tus residuos con recicloplas!</span>
                                            <p>
                                                Desde hace más de seis años, Recicloplas Perú, empresa perteneciente a la Corporación Carvajal, reafirma su compromiso con el medio ambiente y con la sociedad mediante la valorización de residuos de plástico posconsumo, generando un impacto positivo y sostenible.<br /><br /> ¡Comprometidos de verdad! <br /><br /> Reciclamos más de 260 toneladas mensuales de PET posconsumo, las cuales son procesadas por Recicloplas para producir materia prima reciclada de alta calidad y utilizadas por Pamolsa para su transformación en productos terminados. Con esto, no solo evitamos que sean depositados en nuestros ríos, mares y rellenos sanitarios, también reducimos los requerimientos de PET virgen, lo cual significa una menor emisión de gases de efecto invernadero y un menor consumo de energía y petróleo.<br /><br /> Actualmente nuestra operación genera ingresos a más de 700 familias recicladoras y muy pronto ampliaremos nuestra capacidad, con lo que proyectamos incluir a más de 1,000 nuevas familias dentro de la cadena de Recicloplas, al generar nuevos puestos de trabajo.<br /><br /> Así contribuimos a la sociedad y al medio ambiente.
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Certifications">
                            <div className="container-certifications">
                                <div className="info-certifications">
                                    <div>
                                        <h6>Certificaciones</h6>
                                        <span>Calidad y compromiso con las personas</span>
                                        <p>
                                            Nuestra responsabilidad ante los clientes, colaboradores y proveedores hace que nos volvamos exigentes en nuestras operaciones, ofreciendo garantías en la calidad de nuestros productos y servicios. El respaldo se ve reflejado en la obtención de dos certificados internacionales:<br /><br /> Además de ello, consideramos que nuestros colaboradores son parte medular para el logro de nuestros objetivos y en ese sentido trabajamos para que su ambiente de trabajo sea el mejor. Prueba de ello, es la obtención del premio como una de las Mejores Empresas para Trabajar en Perú.<br /><br /> Lo invitamos a conocer nuestra Política de Sistema Integrado de Gestión.
                                </p>
                                    </div>
                                </div>
                                <div className="certifications-companies">
                                    <div>
                                        <div className="companies_us">
                                            <div className="img-company-sgs">
                                            </div>
                                            <div className="img-company-sgs">
                                            </div>
                                            <div className="img-company-brc">
                                            </div>
                                        </div>
                                        <div className="companies-second_us">
                                            <div className="img-company-gp">
                                            </div>
                                            <div className="img-company-gpl">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                pathname === "/trabaja-con-nosotros" ?
                    <div className="container" style={{ background: "#F9F9F9" }}>
                        <div className="square-new" style={{ top: "0" }}></div>
                        <div className="container-grid"
                            style={{
                                paddingTop: "280px"
                            }}
                        >
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
                                    <h4 style={{ color: "#009FE3" }}>¡Puestos disponibles Pamolsa!</h4>
                                    <p>Todo lo que tenemos para ofrecerte</p>
                                </div>
                            </div>
                            <Slider {...settingsWorks} className="new-slick work">
                                <div>
                                    <div className="card-work">
                                        <div className="header-work">
                                            <img src={require('../images/img/work.png')} />
                                        </div>
                                        <div className="card-body">
                                            <h6>Ayudantes de Producción</h6>
                                            <p>Apilar y embalar los productos que salen de la máquina.Abastecimiento de materia prima a la máquina.Revisión y limpieza de los productos.</p>
                                            <button>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card-work">
                                        <div className="header-work">
                                            <img src={require('../images/img/work.png')} />
                                        </div>
                                        <div className="card-body">
                                            <h6>Ayudantes de Producción</h6>
                                            <p>Apilar y embalar los productos que salen de la máquina.Abastecimiento de materia prima a la máquina.Revisión y limpieza de los productos.</p>
                                            <button>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card-work">
                                        <div className="header-work">
                                            <img src={require('../images/img/work.png')} />
                                        </div>
                                        <div className="card-body">
                                            <h6>Ayudantes de Producción</h6>
                                            <p>Apilar y embalar los productos que salen de la máquina.Abastecimiento de materia prima a la máquina.Revisión y limpieza de los productos.</p>
                                            <button>Ver más</button>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="container-grid"
                            style={{
                                alignItems: "end",
                                paddingBottom: "140px"
                            }}
                        >
                            <div className="elipse-work"></div>
                            <div className="img-pm"
                                style={{
                                    position: "relative",
                                    zIndex: "1",
                                    gridColumn: "1/4",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    paddingTop: "180px"
                                }}>
                                
                                <div 
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <div className="square"
                                        style={{
                                            zIndex: "-1",
                                            background: "rgba(255, 255, 255, 0.12)",
                                            top: "40px",
                                            left: "-80px"
                                        }}
                                    ></div>
                                    <img
                                        style={{
                                            borderRadius: "50px"
                                        }}
                                        src={require('../images/img/workpostula.png')} />
                                </div>
                            </div>
                            <div className="info-pm_work"
                                style={{
                                    position: "relative",
                                    zIndex: "1",
                                    gridColumn: "4/8",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    marginLeft: "50px"
                                }}
                            >
                                <div>
                                    <h6
                                        style={{
                                            color: "#fff",
                                            width: "543px",
                                            fontSize: "50px",
                                            fontFamily: "Amble-bold"
                                        }}
                                    >¡Postulamos para entrar en tu vida!</h6>
                                    <p
                                        style={{
                                            color: "#fff",
                                            width: "432px",
                                            marginTop: "20px",
                                            fontSize: "14px",
                                            fontFamily: "Amble-light"
                                        }}
                                    >Sé parte de este gran equipo de profesionales y ayúdanos a transformar planes en realidad.</p>
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
                        </div>
                    </div> : ''
            }
        </Fragment>
    );
}

export default withRouter(News);