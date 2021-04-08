import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import '../styles/dashboard.css'
import { sendNewFile } from '../redux/actions/newfile'
import { setAlert } from '../redux/actions/alert'

const DashbaordAddPublicFile = () => {

    const { errors, handleSubmit, register } = useForm()

    const fileUri = useSelector(state => state.newfile.newfile)

    const dispatch = useDispatch();

    const sendSubmit = (data, e) => {

        const formData = new FormData();
        formData.append('file', data.file[0])

        if (formData) {
            dispatch(sendNewFile(formData))
            setTimeout(() => {
                dispatch(setAlert("Archivo guardado correctamente","", 3000))
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <>
            <div className="content-ds-fluid">
                <div className="title-content-ds">
                    <h6>Agregar un nuevo archivo</h6>
                </div>
                <div className="content-form">
                    <div className="">
                        <form onSubmit={handleSubmit(sendSubmit)}>
                            <div className="form-grid">
                                <div>                                   
                                    <div className="input-ds">
                                        <div className="img-input-ds">
                                            <input
                                                type="file"
                                                name="file"
                                                id="new-file"
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
                        <br></br>
                        {
                            fileUri != "" ?
                            <div>
                                <div className="title-content-ds">
                                    <h6>Link generado:</h6>
                                </div>
                                <br></br>
                                <a href={fileUri} target="_blank">{fileUri}</a> 
                            </div> 
                                : ''
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashbaordAddPublicFile;