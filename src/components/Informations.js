import React, { Fragment } from 'react';
import LogoUs from '../images/svg/logous';
import '../styles/information.css'

const Informations = () => {
    return (
        <Fragment>
            <div className="Map_pm container" style={{background: "#F9F9F9"}}>
                <div className="container-grid_img" style={{marginTop: "50px", alignItems: "center"}}>
                    <div className="img-map_pm information">
                        <img src={require('../images/img/mappamolsa.png')} alt="imagen del mapa" />
                    </div>
                    <div className="info-map_pm">
                        <div className="footer-dc text-map_pm" style={{fontSize:"24px"}}>
                            <LogoUs />
                            <div style={{letterSpacing: "2px"}}>en el mundo</div>
                            <div style={{letterSpacing: "2px"}}>Nuestra visión de crecimiento nos ha llevado a</div>
                            <div style={{letterSpacing: "2px",fontSize: "28px"}} className="bold">internacionalizar</div> 
                            <div style={{letterSpacing: "2px"}}>nuestros productos</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Certifications" style={{background: "#fff", paddingTop: "30px"}}>
                    <div className="container-certifications" style={{alignItems: "center"}}>
                        <div className="info-certifications">
                            <div>
                                <h6>Nuestras Certificaciones</h6>
                                <span>Cumplimos con normas y reglamentos internacionales</span>
                                <p>
                                Comprometidos con nuestros clientes, colaboradores y proveedores buscamos trabajar dentro de estándares internacionales que garanticen la calidad de nuestros productos, procesos y sistemas, así como la mejora continua en la seguridad y salud de nuestros colaboradores.
                                </p>
                            </div>
                        </div>
                        <div className="certifications-companies" style={{justifyContent: "flex-start"}}>
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