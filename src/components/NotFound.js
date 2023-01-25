import React, { Fragment } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Header t={t} />
            <div className="no-quote">
                <p>No se pudo encontrar la página solicitada, te aconsejamos regresar al inicio</p>
                <Link className="quote-back" to="/">regresar</Link>
            </div>
        </Fragment>
    );
}

export default NotFound;