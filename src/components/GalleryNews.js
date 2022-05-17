import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import i18n from "i18next";

const GalleryNews = ({ newDate, t }) => {

    return (
        <Fragment>
            <div className="container-gallery">
                {
                    newDate && newDate.length > 0 ?
                        newDate.map(gl => (
                            <div className="gallery-item" key={gl.id}>
                                <img src={`https://` + gl.file.url} alt="" />
                                <div className="gallery-info">
                                    <span className="gallery-date">{gl.created}</span>
                                    <p className="gallery-title">{i18n.language === 'es' ? gl.title : gl.title_en}</p>
                                    <div className="btn-new">
                                        <Link to={`/noticias/${gl.id}`} className="">{t('ver_mas')}</Link>
                                    </div>
                                </div>
                            </div>
                        )) :

                        <p className="text" style={{ width: "100%", gridColumn: '1/5' }}>{t('noticias.busqueda_vacia')}</p>
                }
            </div>
            <div className="view-journalists">
                <div className="container-view_journalists">
                    <div className="info-view_journalists">
                        <h2>{t('noticias.galeria')}</h2>
                        <p>{t('noticias.galeria_desc')}</p>
                        <Link to="/noticias/galeria-periodistica">{t('noticias.visualizar')}</Link>
                    </div>
                    <div className="img-view_journalists">
                        <img src={require('../images/img/galeriaperiodistica.webp')} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GalleryNews;