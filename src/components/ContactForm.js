import React, { Fragment, useEffect, useState } from "react";
import ReactSelect from "react-select";
import ContactCall from "../images/svg/contactcall";
import ContactMarker from "../images/svg/markercontact";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { sendContact } from "../redux/actions/contact";
import ModalSend from "./ModalSend";
import proteccion from "../pdf/politicaproteccion.pdf";
import "../styles/contact.css";
import { geCountry, getCity } from "../redux/actions/place";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, control, setValue } = useForm();

  const countries = useSelector((state) => state.places.countries);
  const cities = useSelector((state) => state.places.cities);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  let selectRef = null;

  const handleChangeCountry = (selectedOption) => {
    dispatch(getCity(selectedOption.id));
    setValue("country", selectedOption, {
      shouldDirty: true,
    });
    setValue("city", null, {
      shouldDirty: true,
    });
  };

  useEffect(() => {
    dispatch(geCountry());
  }, []);

  const optionsContact = [
    { value: "1", label: "Producto" },
    { value: "3", label: "Empleabilidad" },
    { value: "4", label: "Proveedores" },
    { value: "5", label: "Otros" },
    { value: "7", label: "Reclamos/Sugerencias" },
    { value: "10", label: "Apoyos/Donaciones" },
  ];

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "rgba(0, 0, 0, 0.87);" : "rgba(0, 0, 0, 0.87);",
      fontSize: 16,
      fontFamily: "Amble-light",
      backgroundColor: state.isSelected ? "#fff" : "#fff",
      textAlign: "left",
      cursor: "pointer",
      outline: "none",
    }),
    container: (base) => ({
      ...base,
      width: "100%",
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
      fontFamily: "Amble-light",
      borderColor: state.isSelected ? "#C4C4C4" : "#C4C4C4",
    }),
    dropdownIndicator: (base) => ({
      ...base,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      paddingLeft: 2,
    }),
  };

  const onSubmit = (data, e) => {
    const body = {
      ...data,
      request: data.request,
      country: data.country,
      city: data.city,
    };
    dispatch(sendContact(body));
    handleShowModal();
    e.target.reset();
  };

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
                    />
                  }
                  name="request"
                  isClearable
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Ingrese el requerimento",
                    },
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
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese sus nombres completos",
                    },
                  })}
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
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese su empresa",
                    },
                  })}
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
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese su correo",
                    },
                  })}
                />
              </div>
              <span className="complete-form">
                {errors.email && errors.email.message}
              </span>
              <div className="input">
                <Controller
                  name="country"
                  isClearable
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Ingrese su país",
                    },
                  }}
                  render={({ field }) => (
                    <ReactSelect
                      {...field}
                      options={countries}
                      styles={selectStyles}
                      placeholder="País"
                      onChange={handleChangeCountry}
                      getOptionLabel={(countries) => countries.name}
                      getOptionValue={(countries) => countries.id}
                      getNewOptionData={(inputValue, optionLabel) => ({
                        id: optionLabel,
                        name: inputValue,
                        __isNew__: true,
                      })}
                    />
                  )}
                />
              </div>
              <span className="complete-form">
                {errors.country && errors.country.message}
              </span>
              <div className="input">
                <Controller
                  as={
                    <ReactSelect
                      styles={selectStyles}
                      options={cities}
                      placeholder="Ciudad"
                      value={(cities) => cities.id}
                      getOptionLabel={(cities) => cities.name}
                      getOptionValue={(cities) => cities.id}
                      getNewOptionData={(inputValue, optionLabel) => ({
                        id: optionLabel,
                        name: inputValue,
                        __isNew__: true,
                      })}
                    />
                  }
                  name="city"
                  isClearable
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Ingrese su ciudad",
                    },
                  }}
                />
              </div>
              <span className="complete-form">
                {errors.city && errors.city.message}
              </span>
              <div className="input">
                <input
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese su dirección",
                    },
                  })}
                />
              </div>
              <span className="complete-form">
                {errors.email && errors.email.message}
              </span>
              <div className="input">
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese su teléfono",
                    },
                  })}
                />
              </div>
              <span className="complete-form">
                {errors.phone && errors.phone.message}
              </span>
              <div className="input">
                <textarea
                  name="comments"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Comentarios"
                  ref={register({
                    required: {
                      value: true,
                      message: "Ingrese sus comentarios",
                    },
                  })}
                ></textarea>
              </div>
              <span className="complete-form">
                {errors.comments && errors.comments.message}
              </span>
              <div className="conditions">
                <input
                  type="checkbox"
                  name="condition"
                  ref={register({
                    required: {
                      value: true,
                      message: "Debes aceptar las condiciones",
                    },
                  })}
                />
                <p>
                  Acepto la{" "}
                  <a
                    style={{ textDecoration: "none", color: "#FBBA00" }}
                    target="_blank"
                    href={proteccion}
                  >
                    política de protección de datos
                  </a>{" "}
                  personales de este sitio
                </p>
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
          <div>
            <div className="square" style={{ height: "640px" }}></div>
            <div className="img-video_known">
              <div className="img" style={{ height: "100%" }}>
                <img
                  style={{ height: "640px" }}
                  src={require("../images/img/contactform.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="tree-new contact-info">
          <img src={require("../images/img/tree.gif")} alt="" />
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
                <div>
                  <span>Central: (511) 710 3020</span>
                </div>
                <div>
                  <span>Central de ventas: (01) 641 9595</span>
                </div>
                <div>
                  <span>WhatsApp: 934 440 291</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalSend
          closeModal={closeModal}
          title="Tu mensaje fue enviado con exito"
          classModalName="thanks-contact"
        />
      )}
    </Fragment>
  );
};

export default ContactForm;
