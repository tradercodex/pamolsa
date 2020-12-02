import React, { Fragment, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDashboard from '../components/HeaderDashboard'
import { withRouter } from 'react-router-dom'
import Alert from '../components/Alert'
import '../styles/dashboard.css'

// Layouts
import DashboardNew from '../layouts/DashboardNew'
import DashboardAddNew from '../layouts/DashboardAddNew'
import DashboardBanner from '../layouts/DashboardBanner'
import DashboardAddBanner from '../layouts/DashboardAddBanner'
import DashbaordAddNewspaper from '../layouts/DashboardAddNewspaper'
import DashboardVacant from '../layouts/DashboardVacant'
import DashbaordAddVacant from '../layouts/DashboardAddVacant'
import DashboardEditVacant from '../layouts/DashboardEditVacant'
import DashboardProduct from '../layouts/DashboardProduct'
import DashboardAddProduct from '../layouts/DashboardAddProduct'
import DashboardEditProduct from '../layouts/DashboardEditProduct'
import DashboardEditNew from '../layouts/DashboardEditNew'
import DashboardEditNewPaper from '../layouts/DashboardEditNewPaper'
import DashboardActivity from '../layouts/DashboardActivity'
import DashboardAddActivity from '../layouts/DashboardAddActivity'
import DashboardEditActivity from '../layouts/DashboardEditActivity'
import DashboardCommunity from '../layouts/DashboardCommunity'
import DashboardAddCommunity from '../layouts/DashboardAddCommunity'
import DashboardEditCommunity from '../layouts/DashboardEditCommunity'
import ProtectedRoute from '../ProtectedRoute'

const token = localStorage.getItem('token')

const Dashboard = () => {

    useEffect(() => {

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
                        <ProtectedRoute exact path="/administrador/productos" component={DashboardProduct} />
                        <ProtectedRoute exact path="/administrador/productos/nuevo" component={DashboardAddProduct} />
                        <ProtectedRoute exact path="/administrador/productos/editar/:id" component={DashboardEditProduct} />
                        <ProtectedRoute exact path="/administrador/noticias" component={DashboardNew} />
                        <ProtectedRoute exact path="/administrador/noticias/nuevo" component={DashboardAddNew} />
                        <ProtectedRoute exact path="/administrador/noticias/editar/:id" component={DashboardEditNew} />
                        <ProtectedRoute exact path="/administrador/noticias/galeria/editar/:id" component={DashboardEditNewPaper} />
                        <ProtectedRoute exact path="/administrador/banners" component={DashboardBanner} />
                        <ProtectedRoute exact path="/administrador/banners/nuevo" component={DashboardAddBanner}/>
                        <ProtectedRoute exact path="/administrador/noticias/nuevo-periodico" component={DashbaordAddNewspaper} />
                        <ProtectedRoute exact path="/administrador/vacantes" component={DashboardVacant} />
                        <ProtectedRoute exact path="/administrador/vacantes/nueva-vacante" component={DashbaordAddVacant} />
                        <ProtectedRoute exact path="/administrador/vacantes/editar/:id" component={DashboardEditVacant} />
                        <ProtectedRoute exact path="/administrador/actividades" component={DashboardActivity} />
                        <ProtectedRoute exact path="/administrador/actividades/nuevo" component={DashboardAddActivity} />
                        <ProtectedRoute exact path="/administrador/actividades/editar/:id" component={DashboardEditActivity} />
                        <ProtectedRoute exact path="/administrador/comunidad" component={DashboardCommunity} />
                        <ProtectedRoute exact path="/administrador/comunidad/nuevo" component={DashboardAddCommunity} />
                        <ProtectedRoute exact path="/administrador/comunidad/editar/:id" component={DashboardEditCommunity} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Dashboard);