import React from "react";
import CloseModal from "../images/svg/closemodal";
import InformDownload from "../images/svg/informdownload";

const ModalLineaEtica = ({ closeModal, title, t }) => {
  return (
    <div className="content-modal pdfs" style={{ top: 0 }}>
      <div className="modal-send">
        <CloseModal closeModal={closeModal} />
        <div className="info-content">
          <div className="informs-pdfs">
            <h6>Línea ética</h6>
            <div className="box-informs-pdf" style={{ width: "100%" }}>
              <a
                href="https://www.carvajal.com/compromiso-etico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InformDownload />
              </a>
              <p>Compromiso Ético</p>
            </div>
            <div className="box-informs-pdf" style={{ width: "100%" }}>
              <a
                href="https://www.carvajal.com/wp-content/uploads/2022/06/Instructivo-linea-etica-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InformDownload />
              </a>
              <p>Instructivo de como reportar un caso en la línea ética</p>
            </div>
            <div className="box-informs-pdf" style={{ width: "100%" }}>
              <a
                href="https://www.kpmgexternalservices.com.co:1641/organizacioncarvajal/complaint/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InformDownload />
              </a>
              <p>Portal para reportar un caso en la línea ética</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLineaEtica;
