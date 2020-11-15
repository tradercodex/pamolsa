import React, { Fragment } from 'react'
import Delete from '@material-ui/icons/Delete'
import { Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const NewsPaper = ({ id ,name, created, img, deletingPaper }) => {
    return (
        <Fragment>
            <div className="gallery-items">
                <div>
                    <span>{created}</span>
                    <p>{name}</p>
                    <img src={`http://` + img} width="300px" height="300px" alt={name} />
                    <Link to={`/administrador/noticias/galeria/editar/${id}`} className="edit"><Edit /></Link>
                    <button onClick={()=> deletingPaper(id)}  className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
    );
}

export default NewsPaper;