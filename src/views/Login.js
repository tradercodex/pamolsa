import React from 'react'
import { useEffect } from 'react';
import LoginDrawn from '../images/svg/logindrawn';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signin } from '../redux/actions/auth'
import '../styles/login.css'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { register,errors, handleSubmit } = useForm()

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const inputs = document.querySelectorAll('.input');

        function focusFunc() {
            let parent = this.parentNode.parentNode;
            parent.classList.add('focus');
        }

        function blurFunc() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove('focus')
            }
        }

        inputs.forEach(input => {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFunc)
        })
    }, [])

    const sendLogin = (data, e) => {

        const formData = new FormData();

        formData.append('email', data.email);
        formData.append('password', data.password);

        if (formData) {
            dispatch(signin(formData))
            // setTimeout(() => {
            //     history.push('/administrador');
            // }, 2000);
        }
        e.target.reset();
    }

    return (
        <div className="content-login">
            <div className="container" style={{ background: "transparent" }}>
                <div className="modal-container">
                    <div className="banner-container">
                        <p>Pamolsa</p>
                        <div className="img-container">
                            <LoginDrawn />
                        </div>
                        <div className="info-banner">
                            <p>Aprende a enseñar porque enseñando aprenderás</p>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="welcome">
                            <h2>Buenos dias!</h2>
                            <h2>Inicia sesión ahora</h2>
                        </div>
                        <div className="info-form">
                            <p>Ingresa correctamente los datos y accede a nuestro sistema</p>
                        </div>
                        <form action="" onSubmit={handleSubmit(sendLogin)}>
                            <div className="input-div one">
                                <div className="icono">
                                    <i className="fas fa-at"></i>
                                </div>
                                <div>
                                    <h5>Email</h5>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
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
                            </div>
                            <div className="input-div two">
                                <div className="icono">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div>
                                    <h5>Contraseña</h5>
                                    <input
                                        type="password"
                                        name="password"
                                        className="input"
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
                            </div>
                            <button type="submit" className="btn">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;