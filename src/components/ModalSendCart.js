import React from 'react'
import CheckSend from '../images/svg/checksend'
import CloseModal from '../images/svg/closemodal';

const ModalSendCart = ({closeModal, title, subtitle, classModalName = ""}) => {
    return (
        <div className="content-modal quote">
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <CheckSend />
                    <h4>{title}</h4>
                    <p className={classModalName}>{subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalSendCart;