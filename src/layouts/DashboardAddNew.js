import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sendNew } from '../redux/actions/new'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import '../styles/dashboard.css'

const DashbaordAddNew = () => {

    const { errors, handleSubmit, register } = useForm()

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

        formData.append('title', data.title);
        formData.append('author', data.author);
        formData.append('place', data.place);
        formData.append('created', data.created);
        formData.append('department', data.department);
        formData.append('body', data.body)
        formData.append('source', data.source);
        formData.append('file', data.file[0])

        dispatch(sendNew(formData))
        e.target.reset();
        window.location.replace('/administrador/noticias');
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
                                    <div>
                                        <label>Autor</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="author"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el autor de esta noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.author && errors.author.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div>
                                        <label>Lugar</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="place"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el lugar de la noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.place && errors.place.message}
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
                                                    message: 'Ingrese la fecha de está noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.created && errors.created.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Departamento</label></div>
                                    <input
                                        type="text"
                                        name="department"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el departamento de la noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.department && errors.department.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Descripción</label></div>
                                    <textarea
                                        type="text"
                                        name="body"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese la descripción de la noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.body && errors.body.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Fuente</label></div>
                                    <input
                                        type="text"
                                        name="source"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el link de la noticia'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.source && errors.source.message}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="input-ds">
                                    <div><label>Imagen de la noticia</label></div>
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
                                                        message: 'Ingrese la imagen de la noticia'
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
                            <button type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashbaordAddNew;