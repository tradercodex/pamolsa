import Axios from "axios";
import React, { Fragment, useEffect, useState, useRef } from "react";
import proteccion from "../pdf/politicaproteccion.pdf";
import "./../styles/claims.css";

const ClaimsForm = ({ t }) => {
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");
  const [agree, setAgree] = useState(false);
  const [send, setSend] = useState({
    condition: false,
    clienteDirecto: "",
    ruc: "",
    razonSocial: "",
    nombre: "",
    documento: "",
    telefono: "",
    email: "",
    apoderado: "",
    monto: "",
    tipobien: "",
    description: "",
    tiporeclamo: "",
    nropedido: "",
    codigo: "",
    job: "",
    detalle: "",
  });

  const handleChange = (e) => {
    setSend({
      ...send,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    var box = document.querySelectorAll(".box");
    var next = document.querySelectorAll(".nextButton");
    var previous = document.querySelectorAll(".previousButton");
    // input[type=checkbox]
    //
    var inputField = document.querySelectorAll(
      "input[type=text], textarea, select, input[type=checkbox]"
    );

    var isInputValid = [];

    function init(index) {
      next[index].addEventListener("click", function () {
        for (var i = 0; i < inputField.length; i++) {
          //   if (inputField[i].type === "checkbox") {
          //     isInputValid.push(inputField[i].value === "true" ? true : false);
          //   } else {
          isInputValid.push(inputField[i].value.length > 0 ? true : false);
          //   }
        }
        let isInputValidRange;
        // eslint-disable-next-line default-case
        switch (index) {
          case 0:
            isInputValidRange = isInputValid.slice(0, 9);
            break;
          case 1:
            isInputValidRange = isInputValid.slice(10, 13);
            break;
          case 2:
            isInputValidRange = isInputValid.slice(13, 19);
            break;
        }
        console.log(isInputValidRange);
        if (isInputValidRange.every((v) => v === true)) {
          box[index].style.animation = "fadeOut 1s";
          setTimeout(function () {
            box[index].style.display = "none";
          }, 1000);
          setTimeout(function () {
            if (box[index + 1]) {
              box[index + 1].style.display = "grid";
            } else {
              return setMessageSuccess(
                `Gracias por enviarnos su reclamo, lo contactaremos los mas pronto posible.`
              );
            }
          }, 1000);
        }
        isInputValid = [];
      });
    }
    init(0);
    init(1);
    init(2);

    function load(index) {
      previous[index].addEventListener("click", function () {
        box[index + 1].style.animation = "fadeOut 1s";
        setTimeout(function () {
          box[index + 1].style.display = "none";
        }, 1000);
        setTimeout(function () {
          if (box[index]) {
            box[index].style.display = "grid";
          } else {
            return "";
          }
        }, 1000);
      });
    }

    load(0);
    load(1);
  }, [agree]);

  const listClienteDirecto = ["Si", "No"];

  const validateFirst = () => {
    let message = "Todos los campos son obligatorios";

    if (!send.condition) {
      messageFade("Debe aceptar la política de protección de datos");
      return false;
    }

    if (listClienteDirecto.includes(send.clienteDirecto) === false) {
      messageFade("Debe seleccionar si es un cliente directo o no");
      return false;
    }

    if (send.nombre === "" || send.documento === "" || send.email === "") {
      messageFade(message);
      return false;
    } else {
      console.log("send", send);
      return true;
    }
  };

  const messageFade = (message) => {
    setMessageError(message);
    setTimeout(() => {
      setMessageError("");
    }, 2000);
  };

  const validateSecond = () => {
    console.log("send", send.description.length);
    if (send.description.length === 0) {
      messageFade("descripción es obligatorio.");
      return false;
    }

    if (send.monto === "" || send.tipobien === "") {
      messageFade("Todos los campos son obligatorios");
      return false;
    }
  };

  const token = localStorage.getItem("token");

  let config = {
    headers: {
      "x-access-token": token,
    },
  };

  const sendData = async () => {
    if (
      send.nropedido === "" ||
      send.codigo === "" ||
      send.job === "" ||
      send.detalle === "" ||
      send.tiporeclamo === ""
    ) {
      setMessageError("Te faltan campos aún por llenar");
      setTimeout(() => {
        setMessageError("");
      }, 2000);
      return false;
    }

    const dataSend = {
      condition: send.condition,
      clienteDirecto: send.clienteDirecto,
      clienteDirecto: send.clienteDirecto,
      ruc: send.ruc,
      razonSocial: send.razonSocial,
      nombre: send.nombre,
      documento: send.documento,
      telefono: send.telefono,
      email: send.email,
      apoderado: send.apoderado,
      monto: send.monto,
      tipobien: send.tipobien,
      descripcion: send.description,
      tiporeclamo: send.tiporeclamo,
      nropedido: send.nropedido,
      codigo: send.codigo,
      job: send.job,
      detalle: send.detalle,
    };

    try {
      const { data } = await Axios.post(
        "https://ws.pamolsa.com.pe/api/book/send",
        dataSend,
        config
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="claims-form">
      <div className="claims-content__form">
        <div className="img-content__form">
          <img src={require("../images/img/claimsform.jpeg")} alt="" />
        </div>
        <div className="form-content">
          {messageSuccess === "" ? (
            <Fragment>
              <div className="box">
                <h6>
                  Cuéntenos su caso para escalarlo con servicio al cliente.
                </h6>
                <p>1) Identificación del consumidor reclamante</p>
                <div className="conditions">
                  <label>
                    <input
                      type="checkbox"
                      name="condition"
                      value={true}
                      onChange={handleChange}
                      checked={send.condition}
                      style={{ margin: "5px" }}
                    />
                    {t("form.privacidad")}{" "}
                    <a
                      style={{
                        textDecoration: "none",
                        color: "rgb(0 159 227)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={proteccion}
                    >
                      {t("form.privacidad_1")}
                    </a>{" "}
                    {t("form.privacidad_2")}
                  </label>
                </div>
                <form>
                  <div>
                    <h6
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#808291",
                        marginBottom: "5px",
                      }}
                    >
                      Es usted un cliente directo:
                    </h6>
                    <div
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      {listClienteDirecto.map((item, index) => (
                        <label
                          key={index}
                          style={{
                            maxWidth: "100%",
                            margin: "5px",
                            color: "#808291",
                            fontSize: "1rem",
                          }}
                        >
                          <input
                            type="checkbox"
                            name="clienteDirecto"
                            value={item}
                            onChange={handleChange}
                            checked={item === send.clienteDirecto}
                            style={{
                              margin: "5px",
                            }}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="inputBox"></div>

                  <div className="inputBox">
                    <label>RUC</label>
                    <input
                      type="text"
                      name="ruc"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>Razón Social</label>
                    <input
                      type="text"
                      name="razonSocial"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>DNI/CE:</label>
                    <input
                      type="text"
                      name="documento"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>{t("form.telefono")}:</label>
                    <input
                      type="text"
                      name="telefono"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>Email:</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox large">
                    <label>
                      Padre o Madre: *(Para el caso de menores de edad)
                    </label>
                    <select name="apoderado" onChange={handleChange} required>
                      <option value="N/A">-</option>
                      <option value="Padre">Padre</option>
                      <option value="Madre">Madre</option>
                    </select>
                  </div>
                </form>
                {messageError && (
                  <div className="messageError">{messageError}</div>
                )}
                <div className="buttonSection">
                  <button
                    onClick={() => validateFirst()}
                    className="nextButton"
                  >
                    {t("productos.siguiente")}
                  </button>
                </div>
              </div>
              <div className="box">
                <h6>
                  Cuéntenos su caso para escalarlo con servicio al cliente.
                </h6>
                <p>2) Identificación del bien contratado</p>
                <form>
                  <div className="inputBox">
                    <label>Monto reclamado:</label>
                    <input
                      type="text"
                      name="monto"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>Tipo de bien:</label>
                    <select name="tipobien" onChange={handleChange} required>
                      <option value="">Seleccione</option>
                      <option value="Producto">Producto</option>
                      <option value="Servicio">Servicio</option>
                    </select>
                  </div>
                  <div className="inputBox large">
                    <label>Descripción:</label>
                    <textarea
                      name="description"
                      onChange={(e) =>
                        setSend({
                          ...send,
                          description: e.target.value,
                        })
                      }
                      value={send.description}
                      require
                      rows={3}
                    />
                  </div>
                </form>
                {messageError && (
                  <div className="messageError">{messageError}</div>
                )}
                <div className="buttonSection">
                  <button className="previousButton">Anterior</button>
                  <button
                    onClick={() => validateSecond()}
                    className="nextButton"
                  >
                    {t("productos.siguiente")}
                  </button>
                </div>
              </div>
              <div className="box">
                <h6>
                  Cuéntenos su caso para escalarlo con servicio al cliente.
                </h6>
                <p>3) Detalle de reclamación</p>
                <form>
                  <div className="inputBox">
                    <label>Tipo de reclamación:</label>
                    <select name="tiporeclamo" onChange={handleChange} required>
                      <option value="">Seleccione</option>
                      <option value="Reclamo">Reclamo</option>
                      <option value="Queja">Queja</option>
                    </select>
                  </div>
                  <div className="inputBox">
                    <label>N° pedido:</label>
                    <input
                      type="text"
                      name="nropedido"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>Código y descripción del producto:</label>
                    <input
                      type="text"
                      name="codigo"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <label>#JOB:</label>
                    <input
                      type="text"
                      name="job"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputBox large">
                    <label>Detalle:</label>
                    <textarea
                      type="text"
                      name="detalle"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </form>
                {messageError && (
                  <div className="messageError">{messageError}</div>
                )}
                <div className="buttonSection">
                  <button className="previousButton">Anterior</button>
                  <button onClick={() => sendData()} className="nextButton">
                    {t("form.enviar")}
                  </button>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="messageSuccess">{messageSuccess}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClaimsForm;
