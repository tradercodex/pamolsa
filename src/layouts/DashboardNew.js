import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews, deleteNew } from '../redux/actions/new'
import { getNewsPaper, deleteNewPaper } from '../redux/actions/newpaper'
import { Link } from 'react-router-dom';
import { setAlert } from '../redux/actions/alert'
import New from '../components/New'
import NewsPaper from '../components/NewsPaper'

const DashboardNew = () => {

    const news = useSelector(state => state.news.news)
    const newspaper = useSelector(state => state.newspaper.newspaper)

    const [loadingNew, setLoadingNew] = useState(true);
    const [loadingNewspaper, setLoadingNewspaper] = useState(true)

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

    const deletingNew = (id) => {
        const formData = new FormData();
        formData.append('news_id', id)
        let result = window.confirm("Estas seguro de eliminar esta noticia, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            setTimeout(() => {
                dispatch(deleteNew(formData))
                dispatch(setAlert("Noticia eliminada correctamente", "", 4000))
                dispatch(getNews());
            }, 4000);
        }
    }

    const deletingPaper = (id) => {
        const formData = new FormData();
        formData.append('gallery_id', id)
        let result = window.confirm("Estas seguro de eliminar esta galería de noticia, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            setTimeout(() => {
                dispatch(getNewsPaper());
                dispatch(deleteNewPaper(formData))
                dispatch(setAlert("Galería de noticia eliminada correctamente", "", 4000))
            }, 4000);
        }
    }

    if (loadingNew && loadingNewspaper) {
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
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                created={item.created}
                                img={item.file.url}
                                deletingNew={deletingNew}
                            />
                        ))
                        : ''
                }
            </div>
            <div className="title-content-ds" style={{ marginTop: "30px" }}>
                <h6>Tu galería periodística</h6>
                <Link to="/administrador/noticias/nuevo-periodico">Agregar galería periodística</Link>
            </div>
            <div className="grid-container-ds">
                {
                    newspaper && newspaper.length > 0 ?
                        newspaper.map(item => (
                            <NewsPaper
                                id={item.id}
                                key={item.id}
                                name={item.name_newspaper}
                                created={item.created}
                                img={item.file.url}
                                deletingPaper={deletingPaper}
                            />
                        ))
                        : ''
                }
            </div>
        </div>
    );
}

export default DashboardNew;