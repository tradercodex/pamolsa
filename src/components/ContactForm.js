import React, { Fragment } from 'react'
import ReactSelect from 'react-select'
import ContactCall from '../images/svg/contactcall';
import ContactMarker from '../images/svg/markercontact';

const ContactForm = () => {

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: "1px dotted black",
            color: state.isSelected ? "black" : "black",
            fontSize: 16,
            backgroundColor: state.isSelected ? "black" : "black",
            textAlign: "left",
            cursor: "pointer",
            outline: "none",
        }),
        container: base => ({
            ...base,
            width: "100%"
        }),
        control: (base, state) => ({
            ...base,
            height: 42,
            minHeight: 32,
            fontSize: 14,
            paddingLeft: "20px",
            borderRadius: "50px",
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            outline: "none",
            fontFamily: 'Amble-light',
            borderColor: state.isSelected ? "#C4C4C4" : "#C4C4C4"
        }),
        dropdownIndicator: base => ({
            ...base,
        }),
        indicatorSeparator: base => ({
            ...base,
            display: "none"
        }),
        valueContainer: base => ({
            ...base,
            padding: 0,
            paddingLeft: 2
        })
    };

    return (
        <Fragment>
            <div className="container-form_contact">
                <div className="form-contact">
                    <h2>Contáctenos</h2>
                    <div className="form">
                        <div className="input">
                            <ReactSelect
                                styles={selectStyles}
                                placeholder="¿Cuál es su requerimiento?"
                            />
                        </div>
                        <div className="input">
                            <ReactSelect
                                styles={selectStyles}
                                placeholder="¿Qué tipo de usuario es usted?"
                            />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Nombre y apellido" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Empresa" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input">
                            <ReactSelect
                                styles={selectStyles}
                                placeholder="País"
                            />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Telefono" />
                        </div>
                        <div className="input">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Comentarios">

                            </textarea>
                        </div>
                        <div className="conditions">
                            Acepto la política de protección de datos personales de este sitio
                        </div>
                        <div className="btn-send">
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="prs-clients" style={{gridColumn: "7/8"}}>
                    <div >
                        <div className="square" style={{ height: "640px"}}>
                        </div>
                        <div className="img-video_known">
                            <div className="img" style={{height:  "100%"}}>
                                <img style={{ height: "640px"}} src={require('../images/img/contactform.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <div className="new-tree">
                    <img src={require('../images/img/newtree.png')} alt=""/>
                </div>
                <div className="container-grid">
                    <div className="marker-contact">
                        <div className="flx">
                            <ContactMarker />
                            <div>
                                <p>Dirección</p>
                                <span>Av. Elmer Faucett 3486 Urb.Bocanegra, Callao</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="call-contact">
                    <div className="flx">
                            <ContactCall />
                            <div>
                                <p>Dirección</p>
                                <div><span>Teléfonos Central: (511) 710-3020</span></div>
                                <div><span>Ventas: 994644843 / 994647087</span><div>
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

export default ContactForm;