import React from 'react'
import CloseModal from '../images/svg/closemodal';
import InformDownload from '../images/svg/informdownload'
import foodService1 from '../pdf/catalogofoodservice.pdf'
import bioform from '../pdf/bioform.pdf'

const ModalFoodService = ({ closeModal,title }) => {
    return (
        <div className="content-modal pdfs" style={{ top: 0 }}>
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <div className="informs-pdfs">
                        <h6>{title}</h6>
                        <div className="box-informs-pdf" style={{width: "100%"}}>
                            <a href={foodService1} target="_blank" rel="noopener noreferrer"><InformDownload /></a>
                            <p>Catálogo Food Service</p>
                        </div>
                        <div className="box-informs-pdf" style={{width: "100%"}}>
                            <a href={bioform} target="_blank" rel="noopener noreferrer"><InformDownload /></a>
                            <p>Catálogo Bioform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFoodService;