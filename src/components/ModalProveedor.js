import React from "react";

const ModalProveedor = ({ closeModal, children }) => {
  const handleClose = () => {
    console.log('Click happened');
    return closeModal(false);
  }
  return (
    <div className="content-modal pdfs" style={{ top: 0 }}>
      <div className="modal-send">
        <svg
          onClick={handleClose}
          className="close-modal"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M18.2987 5.71002C18.1119 5.52276 17.8583 5.41753 17.5938 5.41753C17.3292 5.41753 17.0756 5.52276 16.8888 5.71002L11.9988 10.59L7.10875 5.70002C6.92192 5.51276 6.66827 5.40753 6.40375 5.40753C6.13923 5.40753 5.88558 5.51276 5.69875 5.70002C5.30875 6.09002 5.30875 6.72002 5.69875 7.11002L10.5887 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8888 18.3C17.2788 18.69 17.9087 18.69 18.2987 18.3C18.6888 17.91 18.6888 17.28 18.2987 16.89L13.4087 12L18.2987 7.11002C18.6788 6.73002 18.6788 6.09002 18.2987 5.71002Z"
            fill="black"
            fillOpacity="0.54"
          />
        </svg>
        <div className="info-content">
          <div className="informs-pdfs">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalProveedor;
