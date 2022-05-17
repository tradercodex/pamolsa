import React, { Fragment } from 'react'
import InformDownload from '../images/svg/informdownload'

const SuppliersDocuments = ({ procedimiento, politicasig, politicaproteccion, t }) => {

    return (
        <Fragment>
            <div style={{ background: "rgba(0, 82, 134, 0.2)", paddingTop: "70px", paddingBottom: "70px" }}>
                <div className="container-grid">
                    <div className="info-informs">
                        <h2>{t('header.proveedores')}</h2>
                    </div>
                    <div className="informs-pdfs">
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={procedimiento} target="_blank"><InformDownload /></a>
                            <p>Procedimiento de aplicación del programa de cumplimiento</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={politicaproteccion} target="_blank"><InformDownload /></a>
                            <p>Política de privacidad</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href={politicasig} target="_blank"><InformDownload /></a>
                            <p>Política SIG</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href="https://www.carvajal.com/index.php/nuestra-empresa/proveedores/" target="_blank"><InformDownload /></a>
                            <p>Kit de proveedor</p>
                        </div>
                        <div className="box-informs-pdf">
                            <a rel="noopener noreferrer" href="https://www.kpmgexternalservices.com.co:1606/organizacioncarvajal/complaint" target="_blank"><InformDownload /></a>
                            <p>Línea ética</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SuppliersDocuments;