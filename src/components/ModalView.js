import React, { useEffect } from 'react'
import CloseModal from '../images/svg/closemodal';
import mediumZoom from 'medium-zoom'

const ModalView = ({closeModal,img}) => {

    useEffect(()=> {
        mediumZoom('.zoom',{
            margin: 1
        })
    },[])

    return (
                <img style={{width: "100%"}} className="zoom" src={`http://` + img} alt=""/>
    );
}

export default ModalView;