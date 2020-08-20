import React, { Fragment } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import WOW from 'wowjs'
import '../styles/sustainability.css'

class Sustainability extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Slicks />
                <div className="Container-sb_pm">
                    <div className="sb_pm">
                        <div className="header-title">
                            <h2
                                className="wow animate__animated animate__bounce" 
                                data-wow-duration="2s"
                                data-wow-delay="5s"
                            >Nuestro modelo de sostenibilidad</h2>
                            <p>Se enfoca en la ejecución de diecinueve tácticas asosciadas a tres objetivos estratégicos</p>
                        </div>
                        <div className="models-sb">
                            <div className="model_1">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="header-img">
                                        <img src={require('../images/img/sb1.png')} />
                                        <p className="">
                                            Cerrar el ciclo de nuestros productos
                                        </p>
                                        <div className="info-sb">
                                            <p>
                                                -Transferencia modelos de cierre de ciclo
                                <br />
                                -Articulación de plataformas de gestión de residuos
                                <br />
                                -Emprendimientos sostenibles
                                <br />
                                -Gestión del cambio climático
                                <br />
                                -Desarrollo de soluciones de empaques sostibles
                                <br />
                                -Alianzas con empresas anclas
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="model_2">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="header-img">
                                        <img src={require('../images/img/sb2.png')} />
                                        <p>Fortalecer nuestros actuar empresarial</p>
                                        <div className="info-sb">
                                            <p>
                                                -Crecimiento rentable
                                <br />
                                -Gobierno corporativo,ética y transparente
                                <br />
                                -Gestión de riesgos.
                                <br />
                                -Conectividad con cliente
                                <br />
                                -Sistema gestión sostenibilidad
                                <br />
                                -Gestión de la cadena de suministros
                                <br />
                                -Comunicación responsables y trasparente
                                </p>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="model_3">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="header-img">
                                        <img src={require('../images/img/sb3.png')} />
                                        <p className="w-sb">Desarrollar y cuidar de nuestra gente y las comunidades donde operamos</p>
                                        <div className="info-sb">
                                            <p>
                                                -Respeto por los Derechos Humanos
                                        <br />
                                        -Calidad de vida de nuestros colaboradores
                                        <br />
                                        -Gestión de la cultura ”Carvajal hace las cosas bien”
                                        <br />
                                        -Impulsar cuidades sostenibles
                                        <br />
                                        -Desarrollar,Promover y reneter nuestro talento
                                </p>
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
}

export default Sustainability;