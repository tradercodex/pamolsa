import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import '../styles/dashboard.css'
import { sendBanner } from '../redux/actions/banner'

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
        formData.append('file', data.file[0])

        dispatch(sendBanner(formData))
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
                                    <div><label>Imagen del banner</label></div>
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
    );
}

export default DashbaordAddNew;