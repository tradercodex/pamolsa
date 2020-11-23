import React from 'react'
import CloseModal from '../images/svg/closemodal';

const ModalView = ({closeModal,img}) => {
    return (
        <div className="content-modal gallery">
            <div className="modal-send gallery">
                <CloseModal closeModal={closeModal} />
                <img src={`http://` + img} alt=""/>
            </div>
        </div>
    );
}

export default ModalView;