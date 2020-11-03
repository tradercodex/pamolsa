import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/svg/logopamolsa'

const Sidebar = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.replace('/')
    }

    return (
        <div className="Sidebar" id="sidebar">
            <div className="Sidebar__Wrapper">
                <div className="Logo__Rc">
                    <Logo />
                    <span>Pamolsa</span>
                </div>
                <div className="Nav">
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fas fa-laptop-house"></i>
                                <span>Pagina Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <i className="fas fa-tachometer-alt"></i>
                                <span>Administrador</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/administrador/productos">
                                <i className="fas fa-box"></i>
                                <span>productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/administrador/banners">
                                <i className="far fa-image"></i>
                                <span>Banners</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/administrador/noticias">
                            <i className="far fa-newspaper"></i>
                                <span>Noticias</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/administrador/vacantes">
                                <i className="fas fa-users"></i>
                                <span>Vacantes</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={logout} to="#">
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Cerra Sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;