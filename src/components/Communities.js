import React,{ Fragment } from 'react'
import Delete from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'

const Communities = ({id,img,title,deletingCommunity}) => {
    return ( 
        <Fragment>
            <div className="gallery-items" key={id}>
                <div>
                    <p>{title}</p>
                    <img src={`https://` + img} width="300px" height="300px" alt="imagen" />
                    <Link className="edit" to={`/administrador/comunidad/editar/${id}`}><Edit /></Link>
                    <button onClick={()=>deletingCommunity(id)} className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Communities;