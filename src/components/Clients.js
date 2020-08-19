import React from 'react';
import '../styles/clients.css'
import Slider from "react-slick";
import { withRouter } from 'react-router-dom';

const Clients = ({match}) => {

    let pathname = match.path
    console.log(pathname)

    const settingsNews = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        initialSlade: 0,
        autoplay: true,
        autoplaySpeed: 4000,
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
                                <h4>Nuestros clientes</h4>
                                <p>Creciendo y mejorando con ustedes</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                            <div className="img-client_slick">
                                <img src={require('../images/img/client1.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client2.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client3.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client4.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client5.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client6.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client7.png')} />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-clients">
                        <div className="title-client">
                            <div>
                                <h4>Nuestros clientes</h4>
                                <p>Creciendo y mejorando con ustedes</p>
                            </div>
                        </div>
                        <div className="img-clients_pm">
                            <div className="img-clients">
                            <div className="img-client_slick">
                                <img src={require('../images/img/client1.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client2.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client3.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client4.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client5.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client6.png')} />
                            </div>
                            <div className="img-client_slick">
                                <img src={require('../images/img/client7.png')} />
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