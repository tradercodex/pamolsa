import React from 'react';
import Planta from '../images/svg/planta';
import Colaborator from '../images/svg/colaboradores';
import Families from '../images/svg/families';
import Machine from '../images/svg/machine';
import Book from '../images/svg/book';
import Chart from '../images/svg/chartus';
import Logo from '../images/svg/logo';

const AboutUs = () => {
    return (
        <>
            <div className="container-informations footer">
                <div className="info-carbajal about">
                    <div>
                        <img src={require('../images/img/aboutcarbajal.png')} alt="imagen" />
                        <p>
                            Somos parte de Carvajal Empaques, compañía de la Organización Carvajal especializada en el diseño, producción y distribución de soluciones personalizadas e innovadoras de empaques para alimentos.
                            </p>
                    </div>
                </div>
                <div className="img-carbajal about">
                    <div className="wc">
                        <div className="square-carbajal"></div>
                        <img src={require('../images/img/carbajal.png')} />
                    </div>
                </div>
            </div>
            <div className="container-informations" style={{background: "#fff",marginTop: "0"}}>
                <div className="info-map_pm title">
                    <div>
                        <span>Presencia</span>
                        <h6>Carvajal Empaques</h6>
                        <span>en el mundo</span>
                    </div>
                </div>
            </div>
            <div className="Map_pm container">
                <div className="container-grid_img">
                    <div className="img-map_pm">
                        <img src={require('../images/img/mapcarbajal.png')} />
                    </div>
                    <div className="info-map_pm">
                        <div className="info-map-flex">
                            <div className="" style={{width: "100%"}}>
                                <div className="map-footer-none">
                                    <span>Presencia</span>
                                    <h6>Carvajal Empaques</h6>
                                    <span>en el mundo</span>
                                </div>
                                <div className="text-map_pm">
                                    <div className="skills-gc">
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Planta />
                                            </div>
                                            <strong>12</strong>
                                            <p>número de plantas</p>
                                        </div>
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Colaborator />
                                            </div>
                                            <strong>6,200</strong>
                                            <p>Colaboradores</p>
                                        </div>
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Families />
                                            </div>
                                            <strong>2,700</strong>
                                            <p>Clientes</p>
                                        </div>
                                    </div>
                                    <div className="skills-gc">
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Machine />
                                            </div>
                                            <strong>1000</strong>
                                            <p>número de máquinas</p>
                                        </div>
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Book />
                                            </div>
                                            <strong>10000</strong>
                                            <p>SKU’s</p>
                                        </div>
                                        <div className="pm-inf_sk">
                                            <div>
                                                <Chart />
                                            </div>
                                            <strong>USD$430mm</strong>
                                            <p>Ventas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-dc text-map_pm map-footer-none">
                            <div>Somos una empresa</div>
                            <div className="bold">Multilatina</div>
                            <div>que contribuye con sus empaques</div><div>a que las personas vivas en un mundo mejor</div>
                        </div>
                    </div>
                </div>
                <div className="footer-dc text-map_pm tablet">
                    <div>Somos una empresa</div>
                    <div className="bold">Multilatina</div>
                    <div>que contribuye con sus empaques</div><div>a que las personas vivas en un mundo mejor</div>
                </div>
            </div>
            <div className="About-us_pm">
                <div className="container-about_us">
                    <div className="info-about">
                        <div>
                            <Logo />
                            <h3>Quiénes Somos</h3>
                            <p>
                                Somos una empresa peruana parte de Carvajal Empaques, con más de 28 años en el mercado, especializada en el diseño, producción y distribución de soluciones personalizadas e innovadoras de empaques, con un crecimiento constante desarrollando nuevas líneas de productos más amigables con el medio ambiente y siguiendo las tendencias del mercado.
                        </p>
                        </div>
                    </div>
                    <div className="card-about">
                        <div className="square us">
                        </div>
                        <div className="img-about_us">
                            <div className="img">
                                <img src={require('../images/img/boyspamolsa.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;