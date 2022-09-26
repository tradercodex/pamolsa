import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Logo from '../images/svg/logo'
import Cart from '../images/svg/cart'
import Quote from '../images/svg/quote';
import QuoteEn from '../images/svg/quote_en';

import '../styles/header.css'
import Phone from '../images/svg/phone';
import BarMovile from '../images/svg/barmovile';
import CloseModal from '../images/svg/closemodal';
import User from '@material-ui/icons/SupervisedUserCircle'
import i18n from '../../src/i18n';

const token = localStorage.getItem('token')

const Header = ({ match, number, t }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
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

        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <Fragment>
            <div className="movil-header">
                <div id="header" className="header-rs">
                    <div className="container-header-rs">
                        <div className="Logo-pm">
                            <Link to="/"><Logo /></Link>
                            <div className="Ecommerce-btn">
                                <a href="https://www.pamolsaexpress.com" target="_blank"><Cart />{t('header.ecommerce')}</a>
                            </div>
                        </div>
                        <div className="options-pm-rs">
                            {/**<div className="Quote-btn">
                                <Link to="/cotizador">
                                    {i18n.language === 'es' ? <Quote number={number} /> : <QuoteEn number={number} />}
                                </Link>
                            </div>**/}
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
                                        <li>
                                            <Link to="/nosotros" className={pathname === "/nosotros" ? "active-mv" : ""}>{t('header.nosotros')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/proveedores" className={pathname === "/proveedores" ? "active-menu-item-mv" : "menu-item-mv"}>{t('header.proveedores')}</Link>
                                        </li>
                                        <li><Link to="/productos"
                                            className={
                                                pathname === "/productos" ||
                                                    url === `/productos/${rut}` ||
                                                    //url === "/cotizador" ||
                                                    url === `/productos/linea/${id}` ||
                                                    url === `/productos/${rut}/${id}` ||
                                                    url === `/productos/negocio/${rut}/${id}` ||
                                                    url === `/producto/detalle/${id}`
                                                    ? "active-mv" : ""}>{t('header.productos')}</Link></li>
                                        <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active-mv" : ""}>{t('header.sostenibilidad')}</Link></li>
                                        <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active-mv" : ""}>{t('header.trabaja')}</Link></li>
                                        <li><Link to="/clientes" className={pathname === "/clientes" ? "active-mv" : ""}>{t('header.clientes')}</Link></li>
                                        <li><Link to="/noticias" className={
                                            pathname === "/noticias" ||
                                                url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                                ? "active-mv" : ""}>{t('header.noticias')}</Link></li>
                                        <li><Link to="/contacto" className={pathname === "/contacto" ? "active-mv" : ""}>{t('header.contacto')}</Link></li>
                                        <li>
                                            <div className="Lng-es">
                                                <button onClick={() => changeLanguage('es')}>ESP</button> <button onClick={() => changeLanguage('en')}>ENG</button>
                                            </div>
                                        </li>
                                    </ul>
                                </nav> :
                                <nav className="Nav-pm">
                                    <ul>
                                        <li><Link to="/" className={pathname === "/" || pathname === "/home/distribuidores" ? "active-mv" : ""}>Home</Link></li>
                                        <li>
                                            <Link to="/nosotros" className={pathname === "/nosotros" ? "active-mv" : ""}>{t('header.nosotros')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/proveedores" className={pathname === "/proveedores" ? "active-menu-item-mv" : "menu-item-mv"}>{t('header.proveedores')}</Link>
                                        </li>
                                        <li><Link to="/productos"
                                            className={
                                                pathname === "/productos" ||
                                                    url === `/productos/${rut}` ||
                                                    //url === "/cotizador" ||
                                                    url === `/productos/linea/${id}` ||
                                                    url === `/productos/${rut}/${id}` ||
                                                    url === `/productos/negocio/${rut}/${id}` ||
                                                    url === `/producto/detalle/${id}`
                                                    ? "active-mv" : ""}>{t('header.productos')}</Link></li>
                                        <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active-mv" : ""}>{t('header.sostenibilidad')}</Link></li>
                                        <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active-mv" : ""}>{t('header.trabaja')}</Link></li>
                                        <li><Link to="/clientes" className={pathname === "/clientes" ? "active-mv" : ""}>{t('header.clientes')}</Link></li>
                                        <li><Link to="/noticias" className={
                                            pathname === "/noticias" ||
                                                url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                                ? "active-mv" : ""}>{t('header.noticias')}</Link></li>
                                        <li><Link to="/contacto" className={pathname === "/contacto" ? "active-mv" : ""}>{t('header.contacto')}</Link></li>
                                        <li>
                                            <div className="Lng-es">
                                                <button onClick={() => changeLanguage('es')}>ESP</button> <button onClick={() => changeLanguage('en')}>ENG</button>
                                            </div>
                                        </li>
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
                                    <li style={{ listStyle: "none", marginLeft: "50px" }}><Link style={{ color: "#4d4d4d" }} to="/administrador/banners"><User /></Link></li> : ''
                            }
                            <div className="phones">
                                <div className="icon">
                                    <Phone />
                                </div>
                                <span>{t('llamanos')}: Central: (511) 710 3020 | {t('footer.central')}: (01) 641 9595 WhatsApp: 934 440 291 | {t('footer.horario')}</span>
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
                                    <li
                                        className="menu-items"
                                        ref={ref}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        <button
                                            type="button"
                                            aria-haspopup="menu"
                                            aria-expanded={dropdown ? "true" : "false"}
                                            onClick={() => setDropdown((prev) => !prev)}
                                        >
                                            <Link to="/nosotros" className={pathname === "/nosotros" ? "active" : ""}>{t('header.nosotros')}</Link>
                                        </button>
                                        <ul className={`dropdown dropdown-submenu ${dropdown ? "show" : ""}`}>
                                            <li
                                                className="menu-sub-items"
                                                ref={ref}
                                                onMouseEnter={onMouseEnter}
                                                onMouseLeave={onMouseLeave}
                                            >
                                                <Link to="/proveedores" className={pathname === "/proveedores" ? "active" : ""}>{t('header.proveedores')}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/productos"
                                        className={
                                            pathname === "/productos" ||
                                                url === `/productos/${rut}` ||
                                                //url === "/cotizador" ||
                                                url === `/productos/linea/${id}` ||
                                                url === `/productos/${rut}/${id}` ||
                                                url === `/productos/negocio/${rut}/${id}` ||
                                                url === `/producto/detalle/${id}`
                                                ? "active" : ""}>{t('header.productos')}</Link></li>
                                    <li><Link to="/sostenibilidad" className={pathname === "/sostenibilidad" || pathname === "/sostenibilidad/comunidad/:name" ? "active" : ""}>{t('header.sostenibilidad')}</Link></li>
                                    <li><Link to="/trabaja-con-nosotros" className={pathname === "/trabaja-con-nosotros" ? "active" : ""}>{t('header.trabaja')}</Link></li>
                                    <li><Link to="/clientes" className={pathname === "/clientes" ? "active" : ""}>{t('header.clientes')}</Link></li>
                                    <li><Link to="/noticias" className={
                                        pathname === "/noticias" ||
                                            url === `/noticias/${rut}` || pathname === "/noticias/galeria-periodistica"
                                            ? "active" : ""}>{t('header.noticias')}</Link></li>
                                    <li><Link to="/contacto" className={pathname === "/contacto" ? "active" : ""}>{t('header.contacto')}</Link></li>
                                </ul>
                            </nav>
                            <div className="Options-pm_qe">
                                {/**<div className="Quote-btn">
                                    <Link to="/cotizador">
                                        {i18n.language === 'es' ? <Quote number={number} /> : <QuoteEn number={number} />}
                                    </Link>
                                </div>**/}
                                <div className="Ecommerce-btn">
                                    <a href="https://www.pamolsaexpress.com" target="_blank"><Cart />{t('header.ecommerce')}</a>
                                </div>
                                <div className="Lng-es">
                                    <button onClick={() => changeLanguage('es')}>ESP</button>
                                </div>
                                <div className="Lng">
                                    <p> | </p>
                                </div>
                                <div className="Lng-en">
                                    <button onClick={() => changeLanguage('en')}>ENG</button>
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
