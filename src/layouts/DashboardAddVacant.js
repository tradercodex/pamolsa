import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVacants, sendVacant } from '../redux/actions/vacant'
import { useForm, Controller } from 'react-hook-form'
import '../styles/dashboard.css'
import ReactQuill from 'react-quill'
import { useHistory } from 'react-router-dom'
import { setAlert } from '../redux/actions/alert'

const DashbaordAddVacant = () => {

    const { errors, handleSubmit, register, control } = useForm()

    const dispatch = useDispatch();
    const history = useHistory();

    const sendSubmit = (data, e) => {
        console.log(data)
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('description',data.description)

        if (formData) {
            dispatch(sendVacant(formData))
            setTimeout(() => {
                history.push('/administrador/vacantes');
                dispatch(setAlert("Vacante guardado correctamente","", 4000))
                dispatch(getVacants(100, 1));
            }, 2000);
        }
        e.target.reset();
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Agregar una nueva noticia</h6>
            </div>
            <div className="content-form">
                <div className="">
                    <form onSubmit={handleSubmit(sendSubmit)}>
                        <div className="form-grid">
                            <div>
                                <div className="input-ds">
                                    <div>
                                        <label>Título</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="title"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el título de la noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.title && errors.title.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Descripción</label></div>

                                    <Controller
                                        control={control}
                                        name="description"
                                        rules={{
                                            validate: "Enter at least 10 words in the description",
                                            required: {
                                                value: true,
                                                message: "Escriba la descripción"
                                            }
                                        }}
                                        error={errors.description}
                                        render={({ onChange, value }) => (
                                            <ReactQuill
                                                style={{height: "450px", color: "#fff"}}
                                                theme="snow"
                                                onChange={(description) => onChange(description)}
                                                value={value || ''}
                                            />
                                        )}
                                    />
                                    <div className="error-ds" style={{ marginTop: "60px" }}>
                                        {errors.description && errors.description.message}
                                    </div>
                                </div>
                                <button style={{ marginTop: "10px" }} type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashbaordAddVacant;