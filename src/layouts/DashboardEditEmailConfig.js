import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import '../styles/dashboard.css'
import { updatePassword } from '../redux/actions/email'
import { setAlert } from '../redux/actions/alert'

const DashbaordEditEmailConfig = () => {

    const { errors, handleSubmit, register } = useForm()

    const dispatch = useDispatch();

    const sendSubmit = (data, e) => {

        const formData = new FormData();
        formData.append('password', data.password)

        if (formData) {
            dispatch(updatePassword(formData))
            setTimeout(() => {
                dispatch(setAlert("Guardado correctamente","", 3000))
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <>
            <div className="content-ds-fluid">
                <div className="title-content-ds">
                    <h6>Actualizar contraseña del correo</h6>
                </div>
                <div className="content-form">
                    <div className="">
                        <form onSubmit={handleSubmit(sendSubmit)}>
                            <div className="form-grid">
                                <div>                                   
                                    <div className="input-ds">
                                        <div className="img-input-ds">
                                            <input
                                                type="text"
                                                name="password"
                                                placeholder="Nueva contraseña"
                                                ref={
                                                    register({
                                                        required: {
                                                            value: true,
                                                            message: 'Ingrese la nueva contraseña para el correo'
                                                        }
                                                    })
                                                }
                                            />
                                            <div className="error-ds">
                                                {errors.password && errors.file.password}
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

export default DashbaordEditEmailConfig;