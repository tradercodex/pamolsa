import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Logo from '../images/svg/logo'
import Cart from '../images/svg/cart'
import Quote from '../images/svg/quote';

import '../styles/header.css'
import Phone from '../images/svg/phone';

const Header = ({ match }) => {

    let pathname = match.path
    let rut = match.params.name
    let url = match.url
    console.log(url)

    return (
        <Fragment>
            <div className="Call-pm" style={{background: "#ECECEC"}}>
                <div className="Container-header_pm">
                    <div className="phones">
                        <div className="icon">
                            <Phone />
                        </div>
                        <span>Llámanos: Central: (511) 710-3020 | Ventas: 994644843 / 994647087</span>
                    </div>
                </div>
            </div>
            <div className="Header-pm">
            <div className="Container-header_pm" style={{top: "10px"}}>
                <div className="Logo-pm">
                    <Logo />
                </div>
                <nav className="Nav-pm">
                    <ul>
                        <li><Link to="/" className={pathname === "/" || pathname === "/home/distribuidores" ? "active" : ""}>Home</Link></li>
                        <li><Link to="/nosotros" className={pathname === "/nosotros" ? "active" : ""}>Nosotros</Link></li>
                        <li><Link to="/productos" className={pathname === "/productos" || url === `/productos/${rut}` ? "active" : ""}>Productos</Link></li>
                        <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" ? "active" : ""}>Sostenibilidad</Link></li>
                        <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active" : ""}>Trabaja con nosotros</Link></li>
                        <li><Link to="/clientes" className={pathname === "/clientes" ? "active" : ""}>Clientes</Link></li>
                        <li><Link to="/noticias" className={pathname === "/noticias" ? "active" : ""}>Noticias</Link></li>
                        <li><Link to="/contacto" className={pathname === "/contacto" ? "active" : ""}>Contacto</Link></li>
                    </ul>
                </nav>
                <div className="Options-pm_qe">
                    <div className="Quote-btn">
                        <Quote />
                    </div>
                    <div className="Ecommerce-btn">
                        <button><Cart />Ir a ecommerce</button>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default withRouter(Header);