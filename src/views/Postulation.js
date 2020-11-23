import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import Arrow from '../images/svg/arrowback';
import Footer from '../components/Footer';
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux'
import { sendPostulation } from '../redux/actions/postulation'
import { es } from 'date-fns/esm/locale'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import $ from 'jquery'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import 'moment/locale/es'
import moment from 'moment';
import ModalSend from '../components/ModalSend';

const Postulation = () => {

    const history = useHistory();

    const [departments, setDepartments] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit, errors, control } = useForm();

    const dispatch = useDispatch();

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const apiDepartments = async () => {
        const response = await axios.get('http://3.120.185.254:8090/api/department/list');
        setDepartments(response.data.data)
    }

    const apiProvinces = async () => {
        const response = await axios.get('http://3.120.185.254:8090/api/province/list');
        setProvinces(response.data.data)
    }

    const apiDistricts = async () => {
        const response = await axios.get('http://3.120.185.254:8090/api/district/list');
        setDistricts(response.data.data)
    }

    const customTheme = createMuiTheme({
        overrides: {
            MuiPickersDay: {
                day: {
                    color: "light-gray",
                    backgroundColor: "white",
                },
                container: {
                    backgroundColor: "black"
                },
                daySelected: {
                    backgroundColor: "#32711E",
                    '&:hover': {
                        backgroundColor: "#32711E",
                    }
                },
                dayDisabled: {
                    color: "black",
                },
                current: {
                    color: "",
                },
            },
        },
    })

    $('#cv').on('change', function () {
        $('#inputval').text($(this).val());
    });

    useEffect(() => {
        apiDepartments();
        apiProvinces();
        apiDistricts();
    }, [])

    const back = () => {
        history.goBack();
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "#fff" : "rgba(0, 0, 0, 0.87);",
            fontSize: 16,
            fontFamily: 'Amble-light',
            backgroundColor: state.isSelected ? "#222" : "#fff",
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

    const sendSubmit = (data, e) => {

        const formData = new FormData();

        console.log(data);

        formData.append('name', data.name);
        formData.append('lastname', data.lastname);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('bithdate', moment(data.bithdate).format('yyyy-MM-DD'));
        formData.append('dni', data.dni);
        formData.append('department', data.department.name)
        formData.append('province', data.province.name);
        formData.append('district', data.district.name)
        formData.append('file', data.file[0])

        dispatch(sendPostulation(formData));
        handleShowModal();
        e.target.reset();
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
                    margin: "0 auto",
                    background: "#FFFFFF",
                    padding: "100px 250px 100px 250px"
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

                <form onSubmit={handleSubmit(sendSubmit)}>
                    <div className="form-container" style={{padding: "0px", maxWidth: "1440px", marginTop: "40px" }}>
                        <div className="grid-form_doble">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombres"
                                    name="name"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus nombres'
                                            }
                                        })
                                    }
                                />
                                <span className="complete-form">
                                    {errors.name && errors.name.message}
                                </span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Apellidos"
                                    name="lastname"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus apellidos'
                                            }
                                        })
                                    }
                                />
                                <span className="complete-form">
                                    {errors.lastname && errors.lastname.message}
                                </span>
                            </div>
                        </div>
                        <div className="grid-form_doble">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    name="email"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su correo'
                                            }
                                        })
                                    }
                                />
                                <span className="complete-form">
                                    {errors.email && errors.email.message}
                                </span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    name="phone"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su teléfono'
                                            }
                                        })
                                    }
                                />
                                <span className="complete-form">
                                    {errors.phone && errors.phone.message}
                                </span>
                            </div>
                        </div>
                        <div className="grid-form_doble">
                            <div>
                                <MuiThemeProvider theme={customTheme}>
                                    <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
                                        <Controller
                                            as={<KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />}
                                            control={control}
                                            name="bithdate"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Ingrese su fecha de nacimiento"
                                                }
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </MuiThemeProvider>
                                <span className="complete-form">
                                    {errors.bithdate && errors.bithdate.message}
                                </span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="DNI"
                                    name="dni"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su DNI'
                                            }
                                        })
                                    }
                                />
                                <span className="complete-form">
                                    {errors.dni && errors.dni.message}
                                </span>
                            </div>
                        </div>
                        <div className="grid-form_triple">
                            <div>
                                <Controller
                                    as={
                                        <ReactSelect
                                            placeholder="Departamento"
                                            styles={selectStyles}
                                            options={departments}
                                            getOptionLabel={departments => departments.name}
                                            getOptionValue={departments => departments.id}
                                        />}
                                    name="department"
                                    isClearable
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese el departamento"
                                        }
                                    }}
                                />
                                <span className="complete-form">
                                    {errors.department && errors.department.message}
                                </span>
                            </div>
                            <div>
                                <Controller
                                    as={
                                        <ReactSelect
                                            placeholder="Provincia"
                                            styles={selectStyles}
                                            options={provinces}
                                            getOptionLabel={provinces => provinces.name}
                                            getOptionValue={provinces => provinces.id}
                                        />}
                                    name="province"
                                    isClearable
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese la provincia"
                                        }
                                    }}
                                />
                                <span className="complete-form">
                                    {errors.province && errors.province.message}
                                </span>
                            </div>
                            <div>
                                <Controller
                                    as={
                                        <ReactSelect
                                            placeholder="Distrito"
                                            styles={selectStyles}
                                            options={districts}
                                            getOptionLabel={districts => districts.name}
                                            getOptionValue={districts => districts.id}
                                        />}
                                    name="district"
                                    isClearable
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Ingrese el distrito"
                                        }
                                    }}
                                />
                                <span className="complete-form">
                                    {errors.district && errors.district.message}
                                </span>
                            </div>
                        </div>
                        <div className="grid-form_doble_right inputval input" style={{display: "grid"}}>
                            <div className="uploader"
                                style={{
                                    gridColumn: "1/4"
                                }}
                            >
                                <div className="input-value" id="inputval">Adjuntar tu cv</div>
                                <input
                                    type="file"
                                    id="cv"
                                    className="upload"
                                    placeholder="Adjuntar tu cv"
                                    name="file"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su cumpleaños'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div style={{ gridColumn: "4/5", position: "relative", textAlign: "center" }}>
                                <label htmlFor="cv">Adjuntar</label>
                            </div>
                            <span className="complete-form" style={{ top: "-10px" }}>
                                {errors.file && errors.file.message}
                            </span>
                        </div>
                        <div className="btn-send" style={{ top: "-20px", position: "relative" }}>
                            <button type="submit" style={{ padding: "15px 30px", outline: "none" }} className="">Enviar CV</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
            { showModal && <ModalSend closeModal={closeModal} title="Tu postulación fue enviado con exito" /> }
        </Fragment>
    );
}

export default Postulation;