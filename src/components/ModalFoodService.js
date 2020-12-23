import React from 'react'
import CloseModal from '../images/svg/closemodal';
import InformDownload from '../images/svg/informdownload'
import foodService1 from '../pdf/catalogofoodservice.pdf'
import foodService2 from '../pdf/catalogobioformcarton.pdf'
import foodService3 from '../pdf/catalogobioformfibra.pdf'

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
                            <a href={foodService2} target="_blank" rel="noopener noreferrer"><InformDownload /></a>
                            <p>Catálogo Bioform Cartón</p>
                        </div>
                        <div className="box-informs-pdf" style={{width: "100%"}}>
                            <a href={foodService3} target="_blank" rel="noopener noreferrer"><InformDownload /></a>
                            <p>Catálogo Bioform Fibra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFoodService;