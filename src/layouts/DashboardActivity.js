import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities , deleteActivity } from '../redux/actions/activity'
import { setAlert } from '../redux/actions/alert'
import { Link } from 'react-router-dom';
import Activities from '../components/Activities';

const DashboardActivity = () => {

    const activities = useSelector(state => state.activities.activities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getActivities(3,1))
    }, [])

    const deletingActivity = (id) => {
        const formData = new FormData();
        formData.append('activity_id', id)
        let result = window.confirm("Estas seguro de eliminar esta actividad, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            setTimeout(() => {
                dispatch(deleteActivity(formData));
                dispatch(getActivities());
                dispatch(setAlert("Actividad eliminada correctamente", "", 2000))
            }, 2000);
        }
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Tus actividades actualmente</h6>
                <Link to="/administrador/actividades/nuevo">Agregar actividad</Link>
            </div>
            <div className="grid-container-ds">
                {
                    activities && activities.length > 0 ?
                    activities.map(item => (
                            <Activities 
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                img={item.file.url}
                                deletingActivity={deletingActivity}
                            />
                        ))
                        : ''
                }
            </div>
        </div>
    );
}

export default DashboardActivity;