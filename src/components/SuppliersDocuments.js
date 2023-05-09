import React, { Fragment } from "react";
import InformDownload from "../images/svg/informdownload";
import ModalLineaEtica from "./ModalLineaEtica";
import ModalKitProveedor from "./ModalKitProveedor";

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
              <a href="#" target="_blank">
                <InformDownload />
              </a>
              <p style={{ textDecoration: "none" }}>
                Protección de datos personales
              </p>
            </div>
            <ul
              style={{
                marginLeft: "4rem",
                display: "block",
                lineHeight: "30px",
                fontFamily: "Amble",
                color: "#4D4D4C",
                fontSize: "14px",
                marginTop: "-5px",
                listStyleType: "none",
              }}
            >
              <li>
                <a
                  href="https://drive.google.com/file/d/1jgs2LOvvb0W5u7o_3xQE-fscZVb4CGLX/view?usp=share_link"
                  target="_blank"
                  style={{ color: "#4D4D4C" }}
                >
                  Política de protección de datos personales
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/116Md1ci6l8yfNF9dg3AeAbPW6dmCJlDI/edit?usp=share_link&ouid=103251919007214006606&rtpof=true&sd=true"
                  target="_blank"
                  style={{ color: "#4D4D4C" }}
                >
                  Solicitud ARCO
                </a>
              </li>
            </ul>
          </div>
        </div>
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
