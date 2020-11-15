import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVacants, deleteVacant } from '../redux/actions/vacant'
import { Link, useHistory } from 'react-router-dom';
import Vacants from '../components/Vacants';
import { setAlert } from '../redux/actions/alert'

const DashboardVacant = () => {

    const vacants = useSelector(state => state.vacants.vacants)
    const dispatch = useDispatch() 
    const history = useHistory();

    useEffect(() => {
        dispatch(getVacants(100, 1))
    }, [])

    const deletingVacant = (id) => {
        const formData = new FormData();
        formData.append('vacant_id', id)
        let result = window.confirm("Estas seguro de eliminar este banner?, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            setTimeout(() => {
                dispatch(deleteVacant(formData))
                history.push('/administrador/vacantes');
                dispatch(setAlert("Vacante eliminado correctamente", "", 4000))
                dispatch(getVacants(100, 1))
            }, 2000);
        }
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Tus vacantes actualmente</h6>
                <Link to="/administrador/vacantes/nueva-vacante">Agregar vacante</Link>
            </div>
            <div className="grid-container-ds">
                {
                    vacants && vacants.length > 0 ?
                        vacants.map(item => (
                            <Vacants
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                deletingVacant={deletingVacant}
                            />
                        ))
                        : ''
                }
            </div>
        </div>
    );
}

export default DashboardVacant;