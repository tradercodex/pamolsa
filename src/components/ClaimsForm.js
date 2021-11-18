import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import './../styles/claims.css'

const ClaimsForm = () => {

    const [messageSuccess, setMessageSuccess] = useState('')
    const [messageError, setMessageError] = useState('')
    const [send, setSend] = useState({
        nombre: '',
        documento: '',
        telefono: '',
        email: '',
        apoderado: '',
        monto: '',
        tipobien: '',
        descripcion: '',
        tiporeclamo: '',
        nropedido: '',
        codigo: '',
        job: '',
        detalle: ''
    })

    const handleChange = (e) => {
        setSend({
            ...send,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {

        var box = document.querySelectorAll(".box");
        var next = document.querySelectorAll(".nextButton");
        var previous = document.querySelectorAll(".previousButton");
        var inputField = document.querySelectorAll("input");

        var isInputValid = [];

        function init(index) {
            next[index].addEventListener('click', function () {
                for (var i = index; i < inputField.length; i++) {
                    isInputValid.push(!!inputField[i].value);
                }
                if (isInputValid[index] && isInputValid[index + 1]) {
                    box[index].style.animation = "fadeOut 1s";
                    setTimeout(function () {
                        box[index].style.display = "none";
                    }, 1000);
                    setTimeout(function () {
                        if (box[index + 1]) {
                            box[index + 1].style.display = "grid";
                        } else {
                            return setMessageSuccess(`Gracias por enviarnos su reclamo, lo contactaremos los mas pronto posible, muchas gracias !`)
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
            previous[index].addEventListener('click', function () {
                box[index + 1].style.animation = "fadeOut 1s";
                setTimeout(function () {
                    box[index + 1].style.display = "none";
                }, 1000);
                setTimeout(function () {
                    if (box[index]) {
                        box[index].style.display = "grid";
                    } else {
                        return ''
                    }
                }, 1000);
            });
        }

        load(0);
        load(1);
    }, [])

    const validateFirst = () => {
        if (send.nombre === "" || send.apoderado === "" || send.documento === "" || send.email === "") {
            setMessageError("Todos los campos son obligatorios");
            setTimeout(() => {
                setMessageError("");
            }, 2000)
            return false
        } else {
            return true
        }
    }

    const validateSecond = () => {
        if (send.monto === "" || send.tipobien === "" || send.descripcion === "") {
            setMessageError("Todos los campos son obligatorios")
            setTimeout(() => {
                setMessageError("");
            }, 1000)
            return false;
        } else {
            return true
        }
    }

    const sendData = async () => {
        const dataSend = {
            nombre: send.nombre,
            documento: send.documento,
            telefono: send.telefono,
            email: send.email,
            apoderado: send.apoderado,
            monto: send.monto,
            tipobien: send.tipobien,
            descripcion: send.descripcion,
            tiporeclamo: send.tiporeclamo,
            nropedido: send.nropedido,
            codigo: send.codigo,
            job: send.job,
            detalle: send.detalle
        }
        
        if (send.nombre === "" || send.apoderado === "" || send.email === "" ||
        send.tiporeclamo === "" || send.nropedido === "" || send.codigo === "" || send.job === "" || send.detalle === "") {
            setMessageError("Te faltan campos aún por llenar")
            setTimeout(() => {
                setMessageError("");
            }, 1000)
            return false;
        }

        try {
            const { data } = await Axios.post("https://ws.pamolsa.com.pe/api/book/send", dataSend);
        }  catch(e) {
            console.log(e)
        }
    }

    return (
        <section className="claims-form">
            <div className="claims-content__form">
                <div className="img-content__form">
                    <img src={require('../images/img/claimsform.jpeg')} alt="" />
                </div>
                <div className="form-content">
                    {messageSuccess === "" ?
                        <Fragment>
                            <div className="box">
                                <h6>Cuéntenos su caso para escalarlo con servicio al cliente.</h6>
                                <p>1) Identificación del consumidor reclamante</p>
                                <form>
                                    <div className="inputBox">
                                        <label>Nombre</label>
                                        <input type="text" name="nombre" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>DNI/CE:</label>
                                        <input type="text" name="documento" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>Teléfono:</label>
                                        <input type="text" name="telefono" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>Email:</label>
                                        <input type="text" name="email" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox large">
                                        <label>Padre o Madre: *(Para el caso de menores de edad)</label>
                                        <select name="apoderado" onChange={handleChange} required>
                                            <option value="">-</option>
                                            <option value="Padre">Padre</option>
                                            <option value="Madre">Madre</option>
                                        </select>
                                    </div>
                                </form>
                                {messageError && <div className="messageError">{messageError}</div>}
                                <div className="buttonSection">
                                    <button onClick={() => validateFirst()} className="nextButton">Siguiente</button>
                                </div>
                            </div>
                            <div className="box">
                                <h6>Cuéntenos su caso para escalarlo con servicio al cliente.</h6>
                                <p>2) Identificación del bien contratado</p>
                                <form>
                                    <div className="inputBox">
                                        <label>Monto reclamado:</label>
                                        <input type="text" name="monto" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>Tipo de bien:</label>
                                        <select name="tipobien" onChange={handleChange} required>
                                            <option value="">-</option>
                                            <option value="Producto">Producto</option>
                                            <option value="Servicio">Servicio</option>
                                        </select>
                                    </div>
                                    <div className="inputBox large">
                                        <label>Descripción:</label>
                                        <textarea type="text" name="descripcion" onChange={handleChange} required />
                                    </div>
                                </form>
                                {messageError && <div className="messageError">{messageError}</div>}
                                <div className="buttonSection">
                                    <button className="previousButton">Anterior</button>
                                    <button onClick={validateSecond} className="nextButton">Siguiente</button>
                                </div>
                            </div>
                            <div className="box">
                                <h6>Cuéntenos su caso para escalarlo con servicio al cliente.</h6>
                                <p>3) Detalle de reclamación</p>
                                <form>
                                    <div className="inputBox">
                                        <label>Tipo de reclamación:</label>
                                        <select name="tiporeclamo" onChange={handleChange} required>
                                            <option value="">-</option>
                                            <option value="Reclamo">Reclamo</option>
                                            <option value="Queja">Queja</option>
                                        </select>
                                    </div>
                                    <div className="inputBox">
                                        <label>N° pedido:</label>
                                        <input type="text" name="nropedido" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>Código y descripción del producto:</label>
                                        <input type="text" name="codigo" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox">
                                        <label>#JOB:</label>
                                        <input type="text" name="job" onChange={handleChange} required />
                                    </div>
                                    <div className="inputBox large">
                                        <label>Detalle:</label>
                                        <textarea type="text" name="detalle" onChange={handleChange} required />
                                    </div>
                                </form>
                                {messageError && <div className="messageError">{messageError}</div>}
                                <div className="buttonSection">
                                    <button className="previousButton">Anterior</button>
                                    <button onClick={() => sendData()} className="nextButton">Enviar</button>
                                </div>
                            </div>
                        </Fragment> :
                        <div className="messageSuccess">{messageSuccess}</div>
                    }
                </div>
            </div>
        </section>
    );
}

export default ClaimsForm;