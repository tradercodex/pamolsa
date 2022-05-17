import React, { Fragment } from 'react'
import Play from '../images/svg/play'

const InformationWork = ({t}) => {
    return (
        <Fragment>
            <div className="container" style={{ background: "#F9F9F9" }}>
                <div className="container-grid why" style={{ paddingTop: "40px", alignItems: "center", paddingBottom: "100px" }}>
                    <div className="info-pm">
                        <div>
                            <h6 style={{ color: "#8DB72E" }}>{t('trabaja.por_que')}</h6>
                            <p style={{ marginTop: "50px" }}>{t('trabaja.por_que_res')}</p>
                        </div>
                    </div>
                    <div className="play-known">
                        <div className="square"></div>
                        <div className="img-video_known">
                            <div className="img">
                                <img src={require('../images/img/obrero.webp')} alt="obrero"/>
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
                    <div className="play-known info" style={{ gridColumn: "1/4",display:"flex",justifyContent: "center",paddingBottom: "50px" }}>
                        <div className="square" style={{left: "120px"}}></div>
                        <div className="img-video_known">
                            <div className="img">
                                <img src={require('../images/img/work.webp')} alt="trabajo"/>
                            </div>
                        </div>
                    </div>
                    <div className="certifications-companies info" style={{ gridColumn: "5/8", display: "flex", justifyContent: "center" }}>
                        <div className="info-container" style={{position: "relative", right: "50px"}}>
                            <div>
                                <div className="title-green-dark-container">
                                    <h6>{t('trabaja.somos')}</h6>
                                </div>
                                <p style={{ width: "447px" }}>{t('trabaja.somos_desc')} ​</p>
                                <div className="companies-second_us">
                                    <div className="img-company-gp">
                                    </div>
                                    <div className="img-company-gpl">
                                    </div>
                                    <div className="img-company-gpw">
                                    </div>
                                    <div className="img-company-gplast">
                                    </div>
                                    <div className="img-company-abe">
                                    </div>
                                    <div className="img-company-gptw21">
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