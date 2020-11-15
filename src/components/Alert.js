import React from 'react'
import { useSelector } from 'react-redux'
import CheckSend from '../images/svg/checksend'

const Alert = () => {

    const alerts = useSelector((state => state.alerts))

    return (
        <>
            {
                alerts !== null && alerts.length > 0 ? alerts.map(alert => {
                    return (
                        <div key={alert.id} className="content-modal" style={{left: "0px", top: "0px"}}>
                            <div className="modal-send">
                                <div className="info-content">
                                    <CheckSend />
                                    <h4>{alert.msg}</h4>
                                    <p>Siga guardando más información que desee !</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                ) : ''
            }
        </>
    );
}

export default Alert;