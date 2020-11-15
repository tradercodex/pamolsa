import React, { Fragment } from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom'

const New = ({ title, created, img, id,deletingNew }) => {
    return (
        <Fragment>
            <div className="gallery-items">
                <div>
                    <span>{created}</span>
                    <p>{title}</p>
                    <img src={`http://` + img} width="300px" height="300px" alt={title} />
                    <Link to={`/administrador/noticias/editar/${id}`} className="edit"><Edit /></Link>
                    <button onClick={()=> deletingNew(id)}  className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
    );
}

export default New;