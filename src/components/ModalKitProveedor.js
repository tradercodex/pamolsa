import React from 'react'
import CloseModal from '../images/svg/closemodal';
import InformDownload from '../images/svg/informdownload'
import politica from '../pdf/politicacumplimientolabores.pdf'

const ModalKitProveedor = ({ closeModal, title, t }) => {
    return (
        <div className="content-modal pdfs" style={{ top: 0 }}>
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <div className="informs-pdfs">
                        <h6>Proveedor</h6>
                        <div className="box-informs-pdf" style={{ width: "100%" }}>
                            <a rel="noopener noreferrer" href="https://www.carvajal.com/proveedores/" target="_blank"><InformDownload /></a>
                            <p>Kit de proveedor</p>
                        </div>
                        <div className="box-informs-pdf" style={{ width: "100%" }}>
                            <a href={politica} target="_blank" rel="noopener noreferrer"><InformDownload /></a>
                            <p>Política de cumplimiento de obligaciones laborales</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalKitProveedor;