import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import '../styles/dashboard.css'
import { sendNewspaper, getNewsPaper } from '../redux/actions/newpaper'
import { setAlert } from '../redux/actions/alert'
import { useHistory } from 'react-router-dom'
 
const DashbaordAddNewspaper = () => {

    const { errors, handleSubmit, register } = useForm()

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

        const formData = new FormData();
        formData.append('name_newspaper', data.name_newspaper);
        formData.append('created', data.created)
        formData.append('file', data.file[0]);

        if (formData) {
            dispatch(sendNewspaper(formData))
            setTimeout(() => {
                history.push('/administrador/noticias');
                dispatch(setAlert("Galería guardada correctamente","", 4000))
                dispatch(getNewsPaper());
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Agregar una nueva galería periodística</h6>
            </div>
            <div className="content-form">
                <div className="">
                    <form onSubmit={handleSubmit(sendSubmit)}>
                        <div className="form-grid">
                            <div>
                            <div className="input-ds">
                                    <div>
                                        <label>Título del periódico</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="name_newspaper"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el título de la galería periodística'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.name_newspaper && errors.name_newspaper.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div>
                                        <label>Fecha</label>
                                    </div>
                                    <input
                                        type="date"
                                        name="created"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese la fecha de la galería periodística'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.created && errors.created.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Imagen de la galería periodística</label></div>
                                    <div className="img-input-ds">
                                        <img style={{ width: "100%" }} id="imgPerfil" src={require('../images/img/uploadimage.jpg')} alt="img" />
                                        <input
                                            type="file"
                                            name="file"
                                            id="profile-image"
                                            accept="image/*"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese la imagen de la galería periodística'
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.file && errors.file.message}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashbaordAddNewspaper;