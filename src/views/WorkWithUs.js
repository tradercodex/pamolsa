import React, { Fragment } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import Play from '../images/svg/play'
import Botella from '../images/svg/pmb'
import Paz from '../images/svg/paz'
import Family from '../images/svg/family'
import News from '../components/News'
import Footer from '../components/Footer';

const WorkWithUs = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <div className="container">
                <div className="container-grid" style={{ paddingTop: "40px", alignItems: "center", paddingBottom: "100px" }}>
                    <div className="info-pm">
                        <div>
                            <h6>Somos una Empresa Líder y Exitosa</h6>
                            <p>En 1994 iniciamos nuestra operación como una empresa dedicada al diseño, fabricación y comercialización de envases desechables. A través de los años hemos venido creciendo, incorporando nuevas líneas de producto al ritmo de las necesidades del mercado. Nuestros envases están fabricados en plástico (poliestireno, poliestireno expandido, polipropileno y pet), papel y aluminio.</p>
                        </div>
                    </div>
                    <div className="play-known">
                        <div className="square"></div>
                        <div className="img-video_known">
                            <div className="img">
                                <img src={require('../images/img/clientmain.png')} />
                            </div>
                        </div>
                        <div className="play-button_pm">
                            <button><Play /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ background: "#F9F9F9" }}>
                <h5
                    style={{
                        paddingTop: "80px",
                        textAlign: "center",
                        fontSize: "50px",
                        color: "#8DB72E",
                        fontFamily: "Amble-bold"
                    }}>¿Por qué Pamolsa?</h5>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#4d4d4d",
                        fontFamily: "Amble-light",
                        margin: "40px auto",
                        width: "800px"
                    }}
                >
                    Atendemos a diversos tipos de clientes de consumo masivo o food service, además de clientes industriales y agroindustriales, abarcando no sólo el mercado peruano sino también extendiendo nuestra cobertura a varios países de Sudamérica y Centroamérica.<br /> <br /> Formamos parte de la organización Carvajal, grupo multinacional que tiene sede principal en Colombia y con presencia en 16 países en América Latina.
                </p>
                <div className="container-grid"
                    style={{
                        textAlign: "center",
                        margin: "0 auto",
                        gridTemplateColumns: "repeat(8,1fr)",
                        width: "800px"
                    }}
                >
                    <div
                        style={{
                            gridColumn: "1/4",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <div>
                            <Botella />
                            <h6
                                style={{
                                    color: "#009FE3",
                                    fontSize: "16px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-bold"
                                }}
                            >Reciclaje</h6>
                            <p
                                style={{
                                    color: "#4d4d4d",
                                    fontSize: "14px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-light",
                                    width: "157px"
                                }}
                            >Reciclamos más de 260 toneladas mensuales de PET</p>
                        </div>
                    </div>
                    <div
                        style={{
                            gridColumn: "4/6",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                        <div>
                            <Paz />
                            <h6
                                style={{
                                    color: "#009FE3",
                                    fontSize: "16px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-bold",
                                }}
                            >Compromiso</h6>
                            <p
                                style={{
                                    color: "#4d4d4d",
                                    fontSize: "14px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-light",
                                    width: "192px"
                                }}
                            >Los clientes, colaboradores y proveedores hace que nos volvamos exigentes en nuestras operaciones</p>
                        </div>
                    </div>
                    <div
                        style={{
                            gridColumn: "6/9",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                        <div>
                            <Family />
                            <h6
                                style={{
                                    color: "#009FE3",
                                    fontSize: "16px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-bold"
                                }}
                            >Familia Pamolsa</h6>
                            <p
                                style={{
                                    color: "#4d4d4d",
                                    fontSize: "14px",
                                    marginTop: "20px",
                                    fontFamily: "Amble-light",
                                    width: "157px"
                                }}
                            >Actualmente nuestra operación genera ingresos a más de 700 familias recicladoras</p>
                        </div>
                    </div>
                </div>
            </div>
            <News />
            <Footer />
        </Fragment>
    );
}

export default WorkWithUs;