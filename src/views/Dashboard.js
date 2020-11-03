import React, { Fragment, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDashboard from '../components/HeaderDashboard'
import { withRouter, Switch, Route } from 'react-router-dom'
import '../styles/dashboard.css'

// Layouts
import DashboardNew from '../layouts/DashboardNew'
import DashboardAddNew from '../layouts/DashboardAddNew'
import DashboardBanner from '../layouts/DashboardBanner'
import DashboardAddBanner from '../layouts/DashboardAddBanner'
import DashbaordAddNewspaper from '../layouts/DashboardAddNewspaper'
import DashboardVacant from '../layouts/DashboardVacant'
import DashbaordAddVacant from '../layouts/DashboardAddVacant'
import Alert from '../components/Alert'
import AOS from 'aos'
import DashboardEditVacant from '../layouts/DashboardEditVacant'
import DashboardProduct from '../layouts/DashboardProduct'
import DashboardAddProduct from '../layouts/DashboardAddProduct'
import DashboardEditProduct from '../layouts/DashboardEditProduct'

const Dashboard = () => {

    useEffect(() => {

        AOS.init({
            duration: 2000,
        });

        const boton = document.getElementById('boton-sidebar')
        const html = document.getElementById('html')
        const botonSidebarLeft = document.getElementById('boton-sidebar_left')
        const navbar = document.getElementById('content-buttons')
        const botonFixed = document.getElementById('content-button_fixed')
        const sidebar = document.getElementById('sidebar')
        const contenedor = document.getElementById('main')

        boton.addEventListener('click', function () {
            sidebar.classList.toggle('Toggle');
            contenedor.classList.toggle('Main');
            botonFixed.classList.remove('Block');
            botonFixed.classList.add('Align');
        })

        botonFixed.addEventListener('click', function () {
            sidebar.classList.toggle('Toggle');
            contenedor.classList.toggle('Main')
        })

        botonSidebarLeft.addEventListener('click', function () {
            html.classList.toggle('Nav-open');
        })

        function mostrarBotonFixed() {
            let scroll = document.documentElement.scrollTop
            if (scroll >= 25) {
                navbar.classList.add('None');
                botonFixed.classList.add('Block');
            } else {
                navbar.classList.remove('None');
                botonFixed.classList.remove('Block');
            }
        }


        window.addEventListener('scroll', mostrarBotonFixed);
    }, [])

    return (
        <Fragment>
            <div className="Wrapper">
                <Sidebar />
                <div className="Main-panel">
                    <HeaderDashboard />
                    <div className="Content" id="main">
                        <Alert />
                        <Route exact path="/administrador/productos" component={DashboardProduct} />
                        <Route exact path="/administrador/productos/nuevo" component={DashboardAddProduct} />
                        <Route exact path="/administrador/productos/editar/:id" component={DashboardEditProduct} />
                        <Route exact path="/administrador/noticias" component={DashboardNew} />
                        <Route exact path="/administrador/noticias/nuevo" component={DashboardAddNew} />
                        <Route exact path="/administrador/banners" component={DashboardBanner} />
                        <Route exact path="/administrador/banners/nuevo" component={DashboardAddBanner} />
                        <Route exact path="/administrador/noticias/nuevo-periodico" component={DashbaordAddNewspaper} />
                        <Route exact path="/administrador/vacantes" component={DashboardVacant} />
                        <Route exact path="/administrador/vacantes/nueva-vacante" component={DashbaordAddVacant} />
                        <Route exact path="/administrador/vacantes/editar/:id" component={DashboardEditVacant} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Dashboard);