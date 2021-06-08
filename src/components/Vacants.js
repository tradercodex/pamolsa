import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const Vacants = ({ title, id, deletingVacant, file }) => {

    return (
        <Fragment>
             <div className="gallery-items">
                <div>
                    <p style={{top: "20px", position: "absolute", zIndex: "999999"}}>{title}</p>
                    <img src={`https://` + file || require('../images/img/work.webp')} width="300px" height="300px" alt={title} />
                    <Link to={`/administrador/vacantes/editar/${id}`} className="edit"><Edit /></Link>
                    <button onClick={()=> deletingVacant(id)}  className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
    );
}

export default Vacants;