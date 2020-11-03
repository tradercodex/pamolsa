import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

const Vacants = ({ title, description, id, deletingVacant }) => {

    return (
        <Fragment>
            <div className="card-work">
                <div className="header-work">
                    <img src={require('../images/img/work.png')} />
                </div>
                <div className="card-body">
                    <h6>{title}</h6>
                    <div><p>{ReactHtmlParser((description).substring(0,150) + '...')}</p></div>
                    <div className="card-button">
                        <Link to={`/administrador/vacantes/editar/${id}`}>Editar</Link>
                        <button onClick={()=> deletingVacant(id)} className="delete">Eliminar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Vacants;