import React from 'react'

const Etic = ({ t }) => {
    return (
        <div className="etic-pro" style={{ background: "#005286", paddingTop: "100px", paddingBottom: "100px" }}>
            <div className="container-grid">
                <div className="info-container">
                    <div className="title-white-container">
                        <h6 style={{ fontSize: "30px" }}>{t('nosotros.linea_etica')}</h6>
                    </div>
                    <p style={{ color: "#fff", marginBottom: "60px" }}>{t('nosotros.linea_etica_1')}</p>
                    <div className="btn-access" >
                        <a rel="noopener noreferrer" target="_blank" href="https://www.kpmgexternalservices.com.co:1606/organizacioncarvajal/complaint">{t('nosotros.ingrese_aqui')}</a>
                    </div>
                </div>
                <div className="post-img-card-rigth etic">
                    <div className="square-img-card right-up">
                    </div>
                    <div className="img-card">
                        <img src={require('../images/img/carbajalempresa.webp')} alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Etic;