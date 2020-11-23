import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Fragment>
            <Header />
            <div className="no-quote">
                <p>No se pudo encontrar la página solicitada, te aconsejamos regresar al inicio</p>
                <Link className="quote-back" to="/">regresar</Link>
            </div>
        </Fragment>
    );
}

export default NotFound;