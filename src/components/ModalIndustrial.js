import React from 'react'
import CloseModal from '../images/svg/closemodal';
import InformDownload from '../images/svg/informdownload'
import industrial from '../pdf/catalogoindustrial.pdf'

const ModalIndustrial = ({ closeModal,title }) => {
    return (
        <div className="content-modal pdfs" style={{ top: 0 }}>
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <div className="informs-pdfs">
                        <h6>{title}</h6>
                        <div className="box-informs-pdf" style={{width: "100%"}}>
                            <a href={industrial} target="_blank"><InformDownload /></a>
                            <p>Catálogo Industrial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalIndustrial;