import React, { Fragment } from 'react'
import Play from '../images/svg/play'

const InformationWork = () => {
    return (
        <Fragment>
            <div className="container" style={{ background: "#F9F9F9" }}>
                <div className="container-grid why" style={{ paddingTop: "40px", alignItems: "center", paddingBottom: "100px" }}>
                    <div className="info-pm">
                        <div>
                            <h6 style={{ color: "#8DB72E" }}>¿Por qué Pamolsa?</h6>
                            <p style={{ marginTop: "50px" }}>En Pamolsa cuidamos que nuestros colaboradores sean buenas personas y cuenten con los conocimientos, habilidades y actitudes que se requieren para ser parte de nuestra cultura organizacional y así poder velar por el ambiente de familia que nos caracteriza.</p>
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
            </div>
            <div>
                <div className="container-grid information">
                    <div className="play-known" style={{ gridColumn: "1/4",display:"flex",justifyContent: "center",paddingBottom: "50px" }}>
                        <div className="square" style={{left: "120px"}}></div>
                        <div className="img-video_known">
                            <div className="img">
                                <img src={require('../images/img/work.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="certifications-companies info" style={{ gridColumn: "5/8", display: "flex", justifyContent: "center" }}>
                        <div className="info-container" style={{position: "relative", right: "50px"}}>
                            <div>
                                <div className="title-green-dark-container">
                                    <h6>Somos un gran lugar para trabajar</h6>
                                </div>
                                <p style={{ width: "447px" }}>Fuimos reconocidos por Great Place to Work como una de las mejores industrias para trabajar en Perú en el  2020, posicionándonos entre las industrias más destacadas por segundo año consecutivo, gracias al excelente clima laboral y las buenas prácticas de gestión del talento que nos representa; fruto del esfuerzo y el espíritu colaborativo de nuestra organización. ​</p>
                                <div className="companies-second_us">
                                    <div className="img-company-gp">
                                    </div>
                                    <div className="img-company-gpl">
                                    </div>
                                    <div className="img-company-gpw">
                                    </div>
                                    <div className="img-company-gp">
                                    </div>
                                    <div className="img-company-abe">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default InformationWork;