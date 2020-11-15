import React,{ Fragment } from 'react'
import Delete from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'

const Activities = ({id,img,title,deletingActivity}) => {
    return ( 
        <Fragment>
            <div className="gallery-items" key={id}>
                <div>
                    <p>{title}</p>
                    <img src={`http://` + img} width="300px" height="300px" alt="imagen" />
                    <Link className="edit" to={`/administrador/actividades/editar/${id}`}><Edit /></Link>
                    <button onClick={()=>deletingActivity(id)} className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Activities;