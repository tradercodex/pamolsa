import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const GalleryNews = ({ newDate }) => {

    console.log(newDate)

    return (
        <Fragment>
            <div className="container-gallery">
                {
                    newDate && newDate.length > 0 ?
                        newDate.map(gl => (
                            <div className="gallery-item" key={gl.id}>
                                <img src={`http://` + gl.file.url} alt="" />
                                <div className="gallery-info">
                                    <span className="gallery-date">{gl.created}</span>
                                    <p className="gallery-title">{gl.title}</p>
                                    <div className="btn-new">
                                        <Link to={`/noticias/${gl.id}`} className="">Ver más</Link>
                                    </div>
                                </div>
                            </div>
                        )) :

                        <p className="text" style={{width: "100%", gridColumn: '1/5'}}>No se encontraron noticias</p>
                }
            </div>
            <div className="view-journalists">
                <div className="container-view_journalists">
                    <div className="info-view_journalists">
                        <h2>Galería periodística</h2>
                        <p>Observa nuestra galería de artículos impresos.</p>
                        <Link to="/noticias/galeria-periodistica">Visualizar</Link>
                    </div>
                    <div className="img-view_journalists">
                        <img src={require('../images/img/galeriaperiodistica.png')} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GalleryNews;