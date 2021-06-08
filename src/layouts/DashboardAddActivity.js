import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import '../styles/dashboard.css'
import { setAlert } from '../redux/actions/alert'
import { sendActivity, getActivities } from '../redux/actions/activity'

const DashboardAddActivity = () => {

    const { errors, handleSubmit, register } = useForm()
    const history = useHistory();

    const dispatch = useDispatch();

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

        const formData = new FormData();
        formData.append('file', data.file[0])
        formData.append('title', data.title)
        formData.append('subtitle', data.subtitle)
        formData.append('url_video', data.url_video)

        if (formData) {
            dispatch(sendActivity(formData));
            setTimeout(() => {
                history.push('/administrador/actividades');
                dispatch(setAlert("Comunidad guardado correctamente", "", 4000))
                dispatch(getActivities());
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <>
            <div className="content-ds-fluid">
                <div className="title-content-ds">
                    <h6>Agregar una actividad</h6>
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
                                                        message: 'Ingrese el titulo de la actividad'
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
                                            <label>Subtítulo</label>
                                        </div>
                                        <input
                                            type="text"
                                            name="subtitle"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese el subtítulo de la actividad'
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.subtitle && errors.subtitle.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div>
                                            <label>URL del video</label>
                                        </div>
                                        <input
                                            type="text"
                                            name="url_video"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese la url del video'
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.url_video && errors.url_video.message}
                                        </div>
                                    </div>
                                    <button type="submit">Guardar</button>
                                </div>
                                <div>
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
                                                            message: 'Ingrese la imagen de la comunidad'
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardAddActivity;