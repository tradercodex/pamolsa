import React, { Fragment, useState } from 'react'
import ReactSelect from 'react-select'
import ContactCall from '../images/svg/contactcall';
import ContactMarker from '../images/svg/markercontact';
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { sendContact } from '../redux/actions/contact'
import ModalSend from './ModalSend';
import '../styles/contact.css'

const ContactForm = () => {

    const dispacth = useDispatch();

    const { register, handleSubmit, errors, control } = useForm();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const optionsContact = [
        { value: '1', label: 'Consultas' },
        { value: '2', label: 'Reclamos' },
        { value: '3', label: 'Cliente' },
        { value: '4', label: 'Nuevo cliente' },
        { value: '5', label: 'Es colaborador' },
        { value: '6', label: 'Proveedor' },
        { value: '7', label: 'Otros' }
    ]

    const optionsCountry = [
        { value: '1', label: 'Perú' },
        { value: '2', label: 'Colombia' },
        { value: '3', label: 'Paraguay' },
        { value: '4', label: 'Brazil' },
        { value: '5', label: 'Argentina' },
        { value: '6', label: 'Ecuador' },
        { value: '7', label: 'Chile' }
    ]

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "rgba(0, 0, 0, 0.87);" : "rgba(0, 0, 0, 0.87);",
            fontSize: 16,
            fontFamily: 'Amble-light',
            backgroundColor: state.isSelected ? "#fff" : "#fff",
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

    const onSubmit = (data,e) => {
                
        const body = {
            ...data,
            request: data.request.label,
            country: data.country.label,
        }
        dispacth(sendContact(body))
        handleShowModal();
        e.target.reset();
    }

    return (
        <Fragment>
            <div className="container-form_contact">
                <div className="form-contact">
                    <h2>Contáctenos</h2>
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input">
                                <Controller
                                    as={
                                    <ReactSelect
                                        styles={selectStyles}
                                        options={optionsContact}
                                        placeholder="¿Cuál es tu requerimiento?"
                                    />}
                                    name="request"
                                    isClearable
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese el requerimento"
                                        }
                                    }}
                                />
                            </div>
                            <span className="complete-form">
                                {errors.request && errors.request.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Nombres y apellidos"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus nombres completos'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="complete-form">
                                {errors.fullname && errors.fullname.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Empresa"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su empresa'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="complete-form">
                                {errors.company && errors.company.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su correo'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="complete-form">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="input">
                                <Controller
                                    as={
                                        <ReactSelect
                                        styles={selectStyles}
                                        options={optionsCountry}
                                        placeholder="País"
                                        />
                                    }
                                    name="country"
                                    isClearable
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese su país"
                                        }
                                    }}
                                />
                            </div>
                            <span className="complete-form">
                                {errors.country && errors.country.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Telefono"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su teléfono'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="complete-form">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="input">
                                <textarea
                                    name="comments"
                                    id="" cols="30"
                                    rows="10"
                                    placeholder="Comentarios"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus comentarios'
                                            }
                                        })
                                    }
                                >
                                </textarea>
                            </div>
                            <span className="complete-form">
                                {errors.comments && errors.comments.message}
                            </span>
                            <div className="conditions">
                               <input
                                type="checkbox"
                                name="condition"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Debes aceptar las condiciones'
                                        }
                                    })
                                }
                               /><p>Acepto la política de protección de datos personales de este sitio</p>
                            </div>
                            <span className="complete-form">
                                {errors.condition && errors.condition.message}
                            </span>
                            <div className="btn-send">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="prs-clients" style={{ gridColumn: "7/8" }}>
                    <div >
                        <div className="square" style={{ height: "640px" }}>
                        </div>
                        <div className="img-video_known">
                            <div className="img" style={{ height: "100%" }}>
                                <img style={{ height: "640px" }} src={require('../images/img/contactform.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <div className="tree-new contact-info">
                    <img src={require('../images/img/tree.gif')} alt="" />
                </div>
                <div className="container-grid">
                    <div className="marker-contact">
                        <div className="flx">
                            <ContactMarker />
                            <div>
                                <p>Teléfonos</p>
                                <span>Av. Elmer Faucett 3486 Urb.Bocanegra, Callao</span>
                            </div>
                        </div>

                    </div>
                    <div className="call-contact">
                        <div className="flx">
                            <ContactCall />
                            <div>
                                <p>Teléfonos</p>
                                <div><span>Central: (511) 710 3020</span></div>
                                <div><span>Central de ventas: (01) 641 9595</span></div>
                                <div><span>WhatsApp: 934 440 291</span></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { showModal && <ModalSend closeModal={closeModal} title="Tu mensaje fue enviado con exito" classModalName="thanks-contact"/> }
        </Fragment>
    );
}

export default ContactForm;
