import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommunities, deleteCommunity } from '../redux/actions/community'
import { setAlert } from '../redux/actions/alert'
import { Link } from 'react-router-dom';
import Communities from '../components/Communities'

const DashboardCommunity = () => {

    const communities = useSelector(state => state.communities.communities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommunities())
    }, [])

    const deletingCommunity = (id) => {
        const formData = new FormData();
        formData.append('community_id', id)
        let result = window.confirm("Estas seguro de eliminar esta comunidad, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            setTimeout(() => {
                dispatch(deleteCommunity(formData));
                dispatch(getCommunities());
                dispatch(setAlert("Comunidad eliminada correctamente", "", 4000))
            }, 4000);
        }
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Tus actividades actualmente</h6>
                <Link to="/administrador/comunidad/nuevo">Agregar actividad</Link>
            </div>
            <div className="grid-container-ds">
                {
                    communities && communities.length > 0 ?
                    communities.map(item => (
                            <Communities 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                img={item.file.url}
                                deletingCommunity={deletingCommunity}
                            />
                        ))
                        : ''
                }
            </div>
        </div>
    );
}

export default DashboardCommunity;