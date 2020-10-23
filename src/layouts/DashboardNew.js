import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../redux/actions/new'
import { getNewsPaper } from '../redux/actions/newpaper'
import { Link } from 'react-router-dom';
import New from '../components/New'
import NewsPaper from '../components/NewsPaper'

const DashboardNew = () => {

    const news = useSelector(state => state.news.news)
    const newspaper = useSelector(state => state.newspaper.newspaper)
    
    const [ loadingNew, setLoadingNew ] = useState(true);
    const [ loadingNewspaper, setLoadingNewspaper] = useState(true)

    const dispatch = useDispatch()

    const apiNews = () => {
        dispatch(getNews());
        setLoadingNew(false)
    }

    const apiNewsPaper = () => {
        dispatch(getNewsPaper());
        setLoadingNewspaper(false)
    }

    useEffect(() => {
        apiNews();
        apiNewsPaper();
    }, [])

    if(loadingNew && loadingNewspaper) {
        return 'loading'
    }

    return ( 
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Tus noticias</h6>
                <Link to="/administrador/noticias/nuevo">Agregar noticia</Link>
            </div>
            <div className="grid-container-ds">
                {
                    news && news.length > 0 ? 
                    news.map(item => (
                        <New
                            id = {item.id}
                            key = {item.id}
                            title = {item.title}
                            created = {item.created}
                            img = {item.file.url}
                        />
                    ))
                    : ''
                }
            </div>
            <div className="title-content-ds" style={{marginTop: "30px"}}>
                <h6>Tu galería periodística</h6>
                <Link to="/administrador/noticias/nuevo-periodico">Agregar galería periodística</Link>
            </div>
            <div className="grid-container-ds">
                {
                    newspaper && newspaper.length > 0 ? 
                    newspaper.map(item => (
                        <NewsPaper
                            id = {item.id}
                            key = {item.id}
                            name = {item.name_newspaper}
                            created = {item.created}
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