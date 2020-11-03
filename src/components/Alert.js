import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {

    const alerts = useSelector((state => state.alerts))

    return (
        <div>
            {
                alerts !== null && alerts.length > 0 ? alerts.map(alert => {
                        return (
                            <div data-aos="fade-right"  key={alert.id} className="success-alert" >
                                {alert.msg}
                            </div>
                        )
                    }
                ) : ''
            } 
        </div>
    );
}

export default Alert;