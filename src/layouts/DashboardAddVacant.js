import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getVacants, sendVacant } from '../redux/actions/vacant'
import { useForm, Controller } from 'react-hook-form'
import '../styles/dashboard.css'
import ReactQuill from 'react-quill'
import { useHistory } from 'react-router-dom'
import { setAlert } from '../redux/actions/alert'
import $ from 'jquery'

const DashbaordAddVacant = () => {

    const { errors, handleSubmit, register, control } = useForm()

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        $('#profile-image').change(function (e) {
            addImage(e);
        });
        function addImage(e) {
            try {
                var file = e.target.files[0],
                    imageType = /image.*/;
                if (file) {
                    if (!file.type.match(imageType))
                        return;
                }

                var reader = new FileReader();
                reader.onload = fileOnload;
                reader.readAsDataURL(file);

            } catch (error) {
                console.log("Error recuperar imagen");
            }

            function fileOnload(e) {
                var result = e.target.result;
                $('#imgPerfil').attr("src", result);
            }
        }
    }, [])

    const sendSubmit = (data, e) => {
        console.log(data)
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('job_functions', data.job_functions)
        formData.append('description', data.description)
        formData.append('file', data.file[0])

        if (formData) {
            dispatch(sendVacant(formData))
            setTimeout(() => {
                history.push('/administrador/vacantes');
                dispatch(setAlert("Vacante guardado correctamente", "", 4000))
                dispatch(getVacants(100, 1));
            }, 4000);
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
                                        maxLength="40"
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
                                    <div>
                                        <label>Link de la vacante en compu trabajo</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="job_functions"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el link de la vacante'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.job_functions && errors.job_functions.message}
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
                                                style={{ height: "450px", color: "#fff" }}
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
                             
                            </div>
                            <div className="input-ds">
                                <div><label>Imagen del banner (tamaño recomendable - 1920x 1080)</label></div>
                                <div className="img-input-ds">
                                    <img style={{ width: "100%" }} id="imgPerfil" src={require('../images/img/uploadimage.webp')} alt="img" />
                                    <input
                                        type="file"
                                        name="file"
                                        id="profile-image"
                                        accept="image/*"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese la imagen de la banner'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.file && errors.file.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-grid">
                        <button style={{ marginTop: "10px" }} type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashbaordAddVacant;