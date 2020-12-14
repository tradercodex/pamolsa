import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners, deleteBanner } from '../redux/actions/banner'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'

const DashboardNew = () => {

    const banners = useSelector(state => state.banners.banners)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners(100, 1))
    }, [])

    const deletingBanner = (id) => {
        const formData = new FormData();
        formData.append('home_id', id)
        let result = window.confirm("Estas seguro de eliminar este banner?, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            dispatch(deleteBanner(formData))
        }
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Tus banners actualmente</h6>
                <Link to="/administrador/banners/nuevo">Agregar banner</Link>
            </div>
            <div className="grid-container-ds">
                {
                    banners && banners.length > 0 ?
                        banners.map(item => (
                            <Banner
                                id={item.id}
                                key={item.id}
                                img={item.file.url}
                                deletingBanner={deletingBanner}
                            />
                        ))
                        : ''
                }
            </div>
        </div>
    );
}

export default DashboardNew;