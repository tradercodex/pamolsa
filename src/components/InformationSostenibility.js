import React, { Fragment } from 'react'
import Sostenibility from '../images/svg/sostenibilidad'
import Vasito from '../images/svg/vasito'
import HandsSbl from '../images/svg/hand'
import Hoja from '../images/svg/hoja'
import UsersSbl from '../images/svg/usersbl'
import PlantSbl from '../images/svg/plantasbl'
import InformDownload from '../images/svg/informdownload'
import Slider from "react-slick";

const InformationSostenibility = ({ sostenibilidad2019, sostenibilidad2018, sostenibilidad2017 }) => {

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
                        <h2>Nuestro modelo de sostenibilidad</h2>
                        <p>En Pamolsa la sostenibilidad es parte de nuestro ADN. Por ello, trabajamos para aportar al bienestar de las comunidades donde operamos y ser amigables con el medio ambiente. La política de sostenibilidad de Pamolsa asume este proceso como el compromiso con la gestión adecuada de sus recursos y del entorno, buscando el bienestar de las comunidades donde operamos y la rentabilidad de nuestras operaciones.</p>
                    </div>
                    <div className="models-sb">
                        <div className="model_1">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Sostenibility />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#F9F9F9" }}>
                <div className="container-grid">
                    <h2 className="title-container">
                        Nuestros objetivos de sostenibilidad
                    </h2>
                </div>
                <div className="objetives">
                    <div className="objectives-sosten">
                        <PlantSbl />
                        <p>Asegurar la rentabilidad a partir del desarrollo de <span>nuevas tecnologías y productos.</span></p>
                    </div>
                    <div className="objectives-sosten">
                        <Vasito />
                        <p>Mejorar nuestros procesos para <span>minimizar los impactos ambientales.</span></p>
                    </div>
                    <div className="objectives-sosten">
                        <HandsSbl />
                        <p>Enmarcar <span>nuestro actuar empresarial</span>n bajo el cumplimiento de la ley.</p>
                    </div>
                    <div className="objectives-sosten">
                        <Hoja />
                        <p>Desarrollar <span>nuevas alternativas de producto</span> que reduzcan el impacto al medio ambiente.</p>
                    </div>
                    <div className="objectives-sosten">
                        <UsersSbl />
                        <p>Desarrollar e implementar estrategias de RSE dirigidas a <span>colaboradores</span> y las <span>comunidades</span> donde operamos.</p>
                    </div>
                </div>
            </div>
            <div style={{ background: "rgba(0, 82, 134, 0.2)", paddingTop: "70px", paddingBottom: "70px" }}>
                <div className="container-grid">
                    <div className="info-informs">
                        <h2>Informes de sostenibilidad</h2>
                        <p>Impulsamos distintas iniciativas con las que buscamos la sostenibilidad de nuestras operaciones y el cuidado de los recursos naturales. Estas iniciativas están recopiladas en nuestros Informes de sostenibilidad.</p>
                    </div>
                    <div className="informs-pdfs">
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2019} target="_blank"><InformDownload /></a>
                            <p>Sostenibilidad 2019</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2018} target="_blank"><InformDownload /></a>
                            <p>Sostenibilidad 2018</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={sostenibilidad2017} target="_blank"><InformDownload /></a>
                            <p>Sostenibilidad 2017</p>
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
                                        <h4 style={{ width: "520px" }}>Innovación que genera valor</h4>
                                        <img src={require('../images/img/bioform.webp')} alt="bioform" />
                                        <h6>PRIMERA LÍNEA DE EMPAQUES BIODEGRADABLES</h6>
                                        <p>Fabricada en el país con cartón de bagazo de caña de azúcar, amplió su portafolio el 2019 con el lanzamiento de nuevas referencias en platos, contenedores, bandejas y vasos para el mercado de Food Service.</p>
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
                                        <h4 style={{ width: "520px" }}>Innovación que genera valor</h4>
                                        <img src={require('../images/img/petplus.webp')} alt="bioform" />
                                        <p>Desarrollamos PET+, una tecnología que permite obtener productos con una funcionalidad superior a la de un empaque de PET tradicional utilizando hasta 50% menos de material. Adicionalmente mejora las propiedades de aislamiento térmico y la apariencia del producto.</p>
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