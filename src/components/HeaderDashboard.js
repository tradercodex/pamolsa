import React from 'react'

const HeaderDashboard = () => {

    return (
        <nav className="Navbar">
            <div className="Navbar__Bar" id="content-buttons">
                <button id="boton-sidebar"><i className="fas fa-bars"></i></button>
                <button id="boton-sidebar_left"><i className="fas fa-qrcode"></i></button>
                <div className="Navbar__Bar__Fixed" id="content-button_fixed">
                    <button id="boton-sidebar_fixed"><i className="fas fa-chart-bar"></i></button>
                </div>
                <p>Dashboard</p>
            </div>

            <div className="Navbar__Options">
                <p>Administrador</p>
            </div>
        </nav>
    );
}

export default HeaderDashboard;