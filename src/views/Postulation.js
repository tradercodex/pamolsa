import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import Arrow from '../images/svg/arrowback';
import Footer from '../components/Footer';

const Postulation = () => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <Header />
            <div className="Postulation-pm">
                <div className="back">
                    <button onClick={back}><Arrow />Volver</button>
                </div>
            </div>

            <div className="Form-container_postulation" 
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    background: "#FFFFFF",
                    padding: "100px 250px 50px 100px"
                }}
            >
                <h4
                    style={{
                        color: "#32711E",
                        fontSize: "50px",
                        width: "443px",
                        fontFamily: "Amble-bold"
                    }}
                >¡Envia tu postulación!</h4>
                <div className="form-container"
                     style={{
                        marginTop: "40px",
                    }}
                >
                    <div className="grid-form_doble">
                        <div>
                            <input type="text" placeholder="Nombres" />
                        </div>
                        <div>
                            <input type="text" placeholder="Apellidos" />
                        </div>
                    </div>
                    <div className="grid-form_doble">
                        <div>
                            <input type="text" placeholder="Correo Electrónico" />
                        </div>
                        <div>
                            <input type="text" placeholder="Teléfono" />
                        </div>
                    </div>
                    <div className="grid-form_doble">
                        <div>
                            <input type="text" placeholder="Fecha de nacimiento"  />
                        </div>
                        <div>
                            <input type="text" placeholder="DNI"/>
                        </div>
                    </div>
                    <div className="grid-form_triple">
                        <div>
                            <input type="text" placeholder="Departamento" />
                        </div>
                        <div>
                            <input type="text" placeholder="Provincia" />
                        </div>
                        <div>
                            <input type="text" placeholder="Distrito" />
                        </div>
                    </div>
                    <div className="grid-form_doble_right">
                        <div 
                            style={{
                                gridColumn: "1/4"
                            }}
                        >
                            <input type="text" />
                        </div>
                        <div
                             style={{
                                gridColumn: "4/5"
                            }}
                        >
                            <input
                            style={{
                                background: "transparent",
                                border: "1px solid #005286",
                                color: "#005286"
                            }}
                            type="submit" value="Adjuntar" />
                        </div>
                    </div>
                    <div className="button-cv"

                    >
                        <button
                             style={{
                                background: "#32711E",
                                borderRadius: "30px",
                                color: "#fff",
                                border: "none",
                                padding: "15px 70px",
                                marginTop: "20px",
                                fontSize: "14px",
                                fontFamily: "Amble-bold"
                            }}
                        >Enviar CV</button>
                    </div>  
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Postulation;