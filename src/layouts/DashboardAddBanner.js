import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import '../styles/dashboard.css'
import { getBanners, sendBanner } from '../redux/actions/banner'
import { setAlert } from '../redux/actions/alert'

const DashbaordAddNew = () => {

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
        console.log(data)
        formData.append('file', data.file[0])
        formData.append('name', data.name)
        formData.append('subname', data.subname)
        formData.append('subname2', data.subname2)
        formData.append('button_text', data.button_text)
        formData.append('button_url', data.button_url)
        formData.append('button_color', data.button_color)

        if (formData) {
            dispatch(sendBanner(formData))
            setTimeout(() => {
                history.push('/administrador/banners');
                dispatch(setAlert("Banner guardado correctamente","", 4000))
                dispatch(getBanners(100, 1));
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <>
            <div className="content-ds-fluid">
                <div className="title-content-ds">
                    <h6>Agregar un banner</h6>
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
                                            name="name"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese el titulo del banner'
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
                                            name="subname"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese el subtitulo del banner'
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.subname && errors.subname.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div>
                                            <label>Texto adicional</label>
                                        </div>
                                        <input
                                            type="text"
                                            name="subname2"
                                        />
                                        <div className="error-ds">
                                            {errors.subname2 && errors.subname2.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div>
                                            <label>Texto del botón</label>
                                        </div>
                                        <input
                                            type="text"
                                            name="button_text"
                                        />
                                        <div className="error-ds">
                                            {errors.button_text && errors.button_text.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div>
                                            <label>URL del botón</label>
                                        </div>
                                        <input
                                            type="text"
                                            name="button_url"
                                        />
                                        <div className="error-ds">
                                            {errors.button_url && errors.button_url.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div>
                                            <label>Color del botón</label>
                                            <div>
                                                <label> *Coloque en formato hexadecimal Ejm: #C2381B</label>
                                                <br></br>
                                                <label> *Pagina para encontrar colores: </label>
                                                <a style={{color:"blue"}} href="https://htmlcolorcodes.com/es/" target="_blank"> https://htmlcolorcodes.com/es/</a>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            name="button_color"
                                        />
                                        <div className="error-ds">
                                            {errors.button_color && errors.button_color.message}
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
                                    <button type="submit">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashbaordAddNew;