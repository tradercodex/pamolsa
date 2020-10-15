import React, { Fragment } from 'react';
import Logo from '../images/svg/logo';
import '../styles/information.css'

const Informations = () => {
    return (
        <Fragment>
            <div className="Map_pm container" style={{background: "#F9F9F9"}}>
                <div className="container-grid_img" style={{marginTop: "50px", alignItems: "center"}}>
                    <div className="img-map_pm information">
                        <img src={require('../images/img/mappamolsa.png')} />
                    </div>
                    <div className="info-map_pm">
                        <div className="footer-dc text-map_pm" style={{fontSize:"24px"}}>
                            <Logo />
                            <div>en el mundo</div>
                            <div>nuestro crecimiento nos ha llevado a</div>
                            <div className="bold" style={{fontSize: "28px"}}>internacionalizar</div> 
                            <div>nuestros productos</div>
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
                                Comprometidos con nuestros clientes, colaboradores y proveedores buscamos trabajar dentro de estandares internacionales que garanticen la calidad de nuestros productos, procesos y sistemas, así como la mejora continua en la seguridad y salud de nuestros colaboradores.
                                </p>
                            </div>
                        </div>
                        <div className="certifications-companies" style={{justifyContent: "flex-start"}}>
                            <div>
                                <div className="companies_us">

                                    <div className="img-company-sgs">
                                    </div>
                                    <div className="img-company-sgs">
                                    </div>
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