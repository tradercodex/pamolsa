import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Logo from '../images/svg/logo'
import Cart from '../images/svg/cart'
import Quote from '../images/svg/quote';

import '../styles/header.css'
import Phone from '../images/svg/phone';
import BarMovile from '../images/svg/barmovile';
import CloseModal from '../images/svg/closemodal';
import User from '@material-ui/icons/SupervisedUserCircle'

const token = localStorage.getItem('token')

const Header = ({ match, number }) => {

    let pathname = match.path
    let rut = match.params.name
    let id = match.params.id
    let url = match.url

    useEffect(() => {
        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')

        movilOpen.addEventListener('click', function () {
            header.classList.add('movile-active')
        })

        movilClose.addEventListener('click', function () {
            header.classList.remove('movile-active')
        })
    }, [])

    return (
        <Fragment>
            <div className="movil-header">
                <div id="header" className="header-rs">
                    <div className="container-header-rs">
                        <div className="Logo-pm">
                            <Link to="/"><Logo /></Link>
                            <div className="Ecommerce-btn">
                                <a href="https://www.pamolsaexpress.com" target="_blank"><Cart />Ir a ecommerce</a>
                            </div>
                        </div>
                        <div className="options-pm-rs">
                            <div className="Quote-btn">
                                <Link to="/cotizador"><Quote number={number} /></Link>
                            </div>
                            <div className="bars" id="movil">
                                <BarMovile />
                            </div>
                            <div className="close-movil" id="close-movil">
                                <CloseModal />
                            </div>
                        </div>
                        {
                            token ?
                            <nav className="Nav-pm">
                            <ul>
                                <li><Link to="/administrador/banners">Admin</Link></li>
                                <li><Link to="/" className={pathname === "/" || pathname === "/home/distribuidores" ? "active-mv" : ""}>Home</Link></li>
                                <li><Link to="/nosotros" className={pathname === "/nosotros" ? "active-mv" : ""}>Nosotros</Link></li>
                                <li><Link to="/productos"
                                    className={
                                        pathname === "/productos" ||
                                            url === `/productos/${rut}` ||
                                            url === "/cotizador" ||
                                            url === `/productos/linea/${id}` ||
                                            url === `/productos/${rut}/${id}` ||
                                            url === `/productos/negocio/${rut}/${id}` ||
                                            url === `/producto/detalle/${id}`
                                            ? "active-mv" : ""}>Productos</Link></li>
                                <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active-mv" : ""}>Sostenibilidad</Link></li>
                                <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active-mv" : ""}>Trabaja con nosotros</Link></li>
                                <li><Link to="/clientes" className={pathname === "/clientes" ? "active-mv" : ""}>Clientes</Link></li>
                                <li><Link to="/noticias" className={
                                    pathname === "/noticias" ||
                                        url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                        ? "active-mv" : ""}>Noticias</Link></li>
                                <li><Link to="/contacto" className={pathname === "/contacto" ? "active-mv" : ""}>Contacto</Link></li>
                            </ul>
                        </nav> :
                        <nav className="Nav-pm">
                        <ul>
                            <li><Link to="/" className={pathname === "/" || pathname === "/home/distribuidores" ? "active-mv" : ""}>Home</Link></li>
                            <li><Link to="/nosotros" className={pathname === "/nosotros" ? "active-mv" : ""}>Nosotros</Link></li>
                            <li><Link to="/productos"
                                className={
                                    pathname === "/productos" ||
                                        url === `/productos/${rut}` ||
                                        url === "/cotizador" ||
                                        url === `/productos/linea/${id}` ||
                                        url === `/productos/${rut}/${id}` ||
                                        url === `/productos/negocio/${rut}/${id}` ||
                                        url === `/producto/detalle/${id}`
                                        ? "active-mv" : ""}>Productos</Link></li>
                            <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active-mv" : ""}>Sostenibilidad</Link></li>
                            <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active-mv" : ""}>Trabaja con nosotros</Link></li>
                            <li><Link to="/clientes" className={pathname === "/clientes" ? "active-mv" : ""}>Clientes</Link></li>
                            <li><Link to="/noticias" className={
                                pathname === "/noticias" ||
                                    url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                    ? "active-mv" : ""}>Noticias</Link></li>
                            <li><Link to="/contacto" className={pathname === "/contacto" ? "active-mv" : ""}>Contacto</Link></li>
                        </ul>
                    </nav>
                        }
                    </div>
                </div>
            </div>

            <div className="container-header-height" style={{ height: "118px", width: "100%" }}>
                <div className="container-header">
                    <div className="Call-pm" style={{ background: "#ECECEC" }}>
                        <div className="Container-header_pm">
                            {
                                token ?
                                <li style={{listStyle: "none", marginLeft: "50px"}}><Link style={{color: "#4d4d4d"}} to="/administrador/banners"><User /></Link></li> : ''
                            }
                            <div className="phones">
                                <div className="icon">
                                    <Phone />
                                </div>
                                <span>Llámanos: Central: (511) 710 3020 | Central de ventas: (01) 641 9595 WhatsApp: 934 440 291 | Horario: Lunes a Viernes de 8:30 AM a 5:30 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="Header-pm" id="header">
                        <div className="Container-header_pm" style={{ top: "10px" }}>
                            <div className="Logo-pm">
                                <Link to="/"><Logo /></Link>
                            </div>
                                <nav className="Nav-pm">
                                <ul>
                                    <li><Link to="/" className={pathname === "/" || pathname === "/home/distribuidores" ? "active" : ""}>Home</Link></li>
                                    <li><Link to="/nosotros" className={pathname === "/nosotros" ? "active" : ""}>Nosotros</Link></li>
                                    <li><Link to="/productos"
                                        className={
                                            pathname === "/productos" ||
                                                url === `/productos/${rut}` ||
                                                url === "/cotizador" ||
                                                url === `/productos/linea/${id}` ||
                                                url === `/productos/${rut}/${id}` ||
                                                url === `/productos/negocio/${rut}/${id}` ||
                                                url === `/producto/detalle/${id}`
                                                ? "active" : ""}>Productos</Link></li>
                                    <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active" : ""}>Sostenibilidad</Link></li>
                                    <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active" : ""}>Trabaja con nosotros</Link></li>
                                    <li><Link to="/clientes" className={pathname === "/clientes" ? "active" : ""}>Clientes</Link></li>
                                    <li><Link to="/noticias" className={
                                        pathname === "/noticias" ||
                                            url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                            ? "active" : ""}>Noticias</Link></li>
                                    <li><Link to="/contacto" className={pathname === "/contacto" ? "active" : ""}>Contacto</Link></li>
                                </ul>
                            </nav>
                            <div className="Options-pm_qe">
                                <div className="Quote-btn">
                                    <Link to="/cotizador"><Quote number={number} /></Link>
                                </div>
                                <div className="Ecommerce-btn">
                                    <a href="https://www.pamolsaexpress.com" target="_blank"><Cart />Ir a ecommerce</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Header);
