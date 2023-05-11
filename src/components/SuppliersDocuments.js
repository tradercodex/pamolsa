import React, { Fragment, useEffect, useState } from "react";
import InformDownload from "../images/svg/informdownload";
import ModalLineaEtica from "./ModalLineaEtica";
import ModalKitProveedor from "./ModalKitProveedor";
import ModalProveedor from "./ModalProveedor";

const DetalleProtDatos = () => {
  return (
    <div className="informs-pdfs">
      <h6>Protección de datos personales</h6>
      <div className="box-informs-pdf" style={{ width: "100%" }}>
        <a
          href="https://drive.google.com/file/d/1jgs2LOvvb0W5u7o_3xQE-fscZVb4CGLX/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InformDownload />
        </a>
        <p>Política de protección de datos personales</p>
      </div>
      <div className="box-informs-pdf" style={{ width: "100%" }}>
        <a
          href="https://docs.google.com/document/d/1tM7O2AeIx5b9g8mFODfAVUZkTPGwNSo5/edit?usp=share_link&ouid=103251919007214006606&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InformDownload />
        </a>
        <p>Solicitud ARCO</p>
      </div>
    </div>
  );
};

const SuppliersDocuments = ({
  procedimiento,
  politicasig,
  politicaproteccion,
  closePdfModal,
  showPdfModal,
  handleShowPdfModal,
  closePdfModalPolitica,
  showPdfModalPolitica,
  handleShowPdfModalPolitica,
  t,
}) => {
  const [openModalDatos, setOpenModalDatos] = useState(false);

  return (
    <Fragment>
      <div
        style={{
          background: "rgba(0, 82, 134, 0.2)",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <div className="container-grid">
          <div className="info-informs">
            <h2>{t("header.proveedores")}</h2>
          </div>
          <div className="informs-pdfs">
            <div className="box-informs-pdf">
              <a rel="noopener noreferrer" href={procedimiento} target="_blank">
                <InformDownload />
              </a>
              <p>Procedimiento de aplicación del programa de cumplimiento</p>
            </div>
            <div className="box-informs-pdf">
              <a
                rel="noopener noreferrer"
                href={politicaproteccion}
                target="_blank"
              >
                <InformDownload />
              </a>
              <p>Política de privacidad</p>
            </div>
            <div className="box-informs-pdf">
              <a rel="noopener noreferrer" href={politicasig} target="_blank">
                <InformDownload />
              </a>
              <p>Política SIG</p>
            </div>
            <div className="box-informs-pdf">
              <a
                rel="noopener noreferrer"
                onClick={handleShowPdfModalPolitica}
                target="_blank"
              >
                <InformDownload />
              </a>
              <p>Kit de proveedor</p>
            </div>
            <div className="box-informs-pdf">
              <a
                rel="noopener noreferrer"
                onClick={handleShowPdfModal}
                target="_blank"
              >
                <InformDownload />
              </a>
              <p>Línea ética</p>
            </div>
            <div className="box-informs-pdf">
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
                onClick={() => setOpenModalDatos(true)}
              >
                <InformDownload />
              </button>
              <p>Protección de datos personales</p>
            </div>
          </div>
        </div>
        {openModalDatos && (
          <ModalProveedor
            closeModal={setOpenModalDatos}
            children={<DetalleProtDatos />}
          />
        )}
        {showPdfModal && (
          <ModalLineaEtica closeModal={closePdfModal} title="test" t={t} />
        )}
        {showPdfModalPolitica && (
          <ModalKitProveedor
            closeModal={closePdfModalPolitica}
            title="test"
            t={t}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SuppliersDocuments;
