import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const galleries = [
    {
        "_id": 0,
        "img": `${require('../images/img/new5.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje"
    },
    {
        "_id": 1,
        "img": `${require('../images/img/new1.png')}`,
        "date": "30/01/2020",
        "title": "Pamolsa se inagura nueva planta de recicloplas"
    },
    {
        "_id": 2,
        "img": `${require('../images/img/new3.png')}`,
        "date": "22/02/2020",
        "title": "Recíclame y cumple con tu planeta"
    },
    {
        "_id": 3,
        "img": `${require('../images/img/new6.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje"
    },
    {
        "_id": 4,
        "img": `${require('../images/img/new2.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje"
    },
    {
        "_id": 5,
        "img": `${require('../images/img/new4.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje"
    }
]

const GalleryNews = () => {
    return (
        <Fragment>
            <div className="container-gallery">

                {
                    galleries.map(gl => (
                        <div className="gallery-item" key={gl._id}>

                            <img src={gl.img} alt="" />
                            <div className="gallery-info">
                                <span className="gallery-date">{gl.date}</span>
                                <p className="gallery-default">Productos y más</p>
                                <p className="gallery-title">{gl.title}</p>
                                <div className="btn-new">
                                    <Link to={`/noticias/${gl.title}`} className="">Ver más</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="view-journalists">
                <div className="container-view_journalists">
                    <div className="info-view_journalists">
                        <h2>Galería periodística</h2>
                        <p>Observa nuestra galería de artículos impresos.</p>
                        <button>Visualizar</button>
                    </div>
                    <div className="img-view_journalists">
                        <img src={require('../images/img/galeriaperiodistica.png')} alt=""/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GalleryNews;