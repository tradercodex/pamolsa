import React from 'react'
import { useEffect } from 'react';
import LoginDrawn from '../images/svg/logindrawn';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signin } from '../redux/actions/auth'
import '../styles/login.css'
import { Redirect, useHistory } from 'react-router-dom';

const token = localStorage.getItem('token');

const Login = () => {

    const { register,errors, handleSubmit } = useForm()

    const dispatch = useDispatch();
    //const history = useHistory();

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
            setTimeout(() => {
                window.location.reload('/administrador/banners');
            }, 2000);
        }
        e.target.reset();
    }

    if(token) {
        return <Redirect to="/administrador/banners" />
    }

    return (
        <div className="content-login">
            <div className="container" style={{ background: "transparent" }}>
                <div className="modal-container">
                    <div className="banner-container">
                        <p>Pamolsa - Dashboard</p>
                        <div className="img-container" alt="dashboard">
                            <LoginDrawn />
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="welcome">
                            <h2>Inicia sesión</h2>
                        </div>
                        <div className="info-form">
                            <p>Ingresa correctamente los datos y accede al dashboard</p>
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
                                                    message: 'Ingrese el email'
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
                                                    message: 'Ingrese la contraseña'
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