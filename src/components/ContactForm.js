import React, { Fragment } from 'react'
import ReactSelect from 'react-select'

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
                    </div>
                </div>
                <div className="prs-clients">
                    <div >
                        <div className="square wow animate__animated animate__fadeIn"
                            data-wow-duration="2s"
                            data-wow-delay="1.4s">

                        </div>
                        <div className="img-video_known wow animate__animated animate__fadeInRight"
                            data-wow-duration="2s"
                            data-wow-delay="1.8s">
                            <div className="img">
                                <img src={require('../images/img/clientmain.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactForm;