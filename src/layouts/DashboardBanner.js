import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'

const DashboardNew = () => {

    const banners = useSelector(state => state.banners.banners)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners())
    }, [])

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
                            id = {item.id}
                            key = {item.id}
                            img = {item.file.url}
                        />
                    ))
                    : ''
                }
            </div>
        </div>
     );
}
 
export default DashboardNew;