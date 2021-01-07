import React from 'react';
import '../styles/clients.css'
import Slider from "react-slick";
import { withRouter } from 'react-router-dom';

const Clients = ({ match }) => {

    let pathname = match.path

    const settingsNews = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        initialSlade: 0,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
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
        <div className={pathname === "/" ? "Clients-pm" : "bg-gray"}>
            <div className="">
                <Slider {...settingsNews} className="client-slick">
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES AGROINDUSTRIALES</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro1.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro2.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro3.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro4.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro5.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro6.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro7.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro8.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro9.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/clienteagro10.jpg')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES FOOD SERVICE</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food1.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food2.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food3.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food4.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food5.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food6.webp')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food7.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food8.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food9.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food10.png')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES FOOD SERVICE</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food11.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food13.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food14.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food15.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food5.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food17.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food18.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food19.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/food20.jpg')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES INDUSTRIAL</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial1.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial2.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial3.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial4.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial5.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial6.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial7.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial8.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial9.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/industrial10.png')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES AUTOSERVICIOS</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto1.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto2.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto3.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto4.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto5.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto6.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto7.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto8.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/auto9.png')} alt="imagen" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES EXPORTACIONES</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/expo1.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/expo2.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/expo3.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/expo4.png')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>CLIENTES TRADICIONAL</h4>
                                <p>Crecemos juntos</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional1.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional2.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional3.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional4.png')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional5.jpg')} alt="imagen" />
                                </div>
                                <div className="img-client_slick">
                                    <img src={require('../images/img/tradicional6.png')} alt="imagen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default withRouter(Clients);