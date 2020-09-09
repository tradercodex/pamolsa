import React, { Fragment } from 'react';
import '../styles/information.css'
import Planta from '../images/svg/planta';
import Colaborator from '../images/svg/colaboradores';
import Families from '../images/svg/families';
import Machine from '../images/svg/machine';
import Book from '../images/svg/book';
import Play from '../images/svg/play'
import Chart from '../images/svg/chartus';

const Informations = () => {
    return (
        <Fragment>
            <div className="Map_pm container">
                <div className="container-grid_img">
                    <div className="img-map_pm">
                        <img src={require('../images/img/map.png')} />
                    </div>
                    <div className="info-map_pm">
                        <div>
                            <span>Presencia</span>
                            <h6>Carvajal Empaques</h6>
                            <span>en el mundo</span>
                            <div className="text-map_pm">
                                Atendemos los mercados: industrial, foodservice y hogar a través del desarrollo de soluciones innovadoras y personalizadas de empaques sostenibles para alimentos
                            <p></p>
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
                        <div className="footer-dc text-map_pm">
                            <p>Somos una empresa <strong>Multilatina</strong> que contribuye con sus empaques a que las personas vivas en un mundo mejor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Informations">
                <div className="square-information"></div>
                <div className="container-informations">
                    <div className="img-footer_news informations">
                        <div className="squeare-footer_new">

                        </div>
                        <div className="img-footer_new">
                            <img src={require('../images/img/pruebanew.png')} />
                        </div>
                    </div>

                    <div className="img-info_carbajal">
                        <div>
                            <img src={require('../images/img/logocarbajal.png')} />
                            <h6>Grupo Carvajal</h6>
                            <p>
                                La Organización Carvajal nació en 1.904 en la ciudad de Cali, Colombia. Un sueño de la Familia Carvajal que ha evolucionado generación tras generación, transformando la organización en lo que es hoy: Una multilatina comprometida con los resultados y con la calidad de sus diferentes productos, servicios y soluciones con aproximadamente 19.000 colaboradores en 14 países en América.
                                <br /><br /> A través de los diferentes sectores empresariales: Empaques, Propal, Educación, Tecnología y Servicios, Mepal y Soluciones de Comunicación.<br /><br /> Algunas de sus marcas más reconocidas son: Norma, Jean Book, Reprograf, Propal, Earth Pact, Mepal, Wau, Carpak y CEN.
                        </p>
                        </div>
                    </div>

                </div>
                <div className="container-informations footer">
                    <div className="info-carbajal">
                        <div>
                            <h6>Línea ética de carvajal</h6>
                            <p>
                                La Organización Carvajal consciente de su responsabilidad con la sociedad, enmarca dentro de la integridad el actuar ético de sus Empresas y sus colaboradores.
                            </p>
                            <div className="more-btn">
                                <button>Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="img-carbajal">
                        <div className="wc">
                            <div className="square-carbajal"></div>
                            <img src={require('../images/img/carbajal.png')} />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-documents">
                <div className="info-documents">
                    <div className="idms">
                        <h5>Documentos informativos</h5>
                        <p>Encuentra aquí toda la información que podrías necesitar</p>
                    </div>
                </div>
                <div className="documents">
                    <div>
                        <div className="document">
                            <div className="button-document">
                                <button><img src={require('../images/img/arrowdownload.png')} /></button>
                            </div>
                            <p>Documento 1</p>
                        </div>
                        <div className="document">
                            <div className="button-document">
                                <button><img src={require('../images/img/arrowdownload.png')} /></button>
                            </div>
                            <p>Documento 2</p>
                        </div>
                        <div className="document">
                            <div className="button-document">
                                <button><img src={require('../images/img/arrowdownload.png')} /></button>
                            </div>
                            <p>Documento 3</p>
                        </div>
                        <div className="document">
                            <div className="button-document">
                                <button><img src={require('../images/img/arrowdownload.png')} /></button>
                            </div>
                            <p>Documento 4</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    );
}

export default Informations;