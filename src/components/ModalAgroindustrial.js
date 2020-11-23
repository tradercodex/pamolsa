import React from 'react'
import CloseModal from '../images/svg/closemodal';
import InformDownload from '../images/svg/informdownload'
import agroindustrial from '../pdf/catalogoagroindustrial.pdf'

const ModalAgroindustrial = ({ closeModal, title }) => {
    return (
        <div className="content-modal pdfs" style={{ top: 0 }}>
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <div className="informs-pdfs">
                        <h6>{title}</h6>
                        <div className="box-informs-pdf" style={{width: "100%"}}>
                            <a href={agroindustrial} target="_blank"><InformDownload /></a>
                            <p>Catálogo Agroindustrial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAgroindustrial;