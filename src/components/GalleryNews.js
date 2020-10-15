import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const galleries = [
    {
        "_id": 0,
        "img": `${require('../images/img/news1.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa servicio delivery eleva demanda por empaques desechables y abre nuevos mercados"
    },
    {
        "_id": 1,
        "img": `${require('../images/img/news2.png')}`,
        "date": "30/01/2020",
        "title": "Ministra Kirla Echegaray: “Rol de las empresas de reciclaje contribuye a la reactivación económica”"
    },
    {
        "_id": 2,
        "img": `${require('../images/img/news3.png')}`,
        "date": "22/02/2020",
        "title": "Acopiadores fueron capacitados en planta Recicloplas"
    },
    {
        "_id": 3,
        "img": `${require('../images/img/news4.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa implementa sistema delivery para llegar a los emprendedores, con estrategía de atención"
    },
    {
        "_id": 4,
        "img": `${require('../images/img/news5.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa considerada como una de las mejores industrias para trabajar"
    },
    {
        "_id": 5,
        "img": `${require('../images/img/news6.png')}`,
        "date": "19/02/2020",
        "title": "5 consejos para reducir, reutilizar y reciclar en tiempos de coronavirus"
    },
    {
        "_id": 6,
        "img": `${require('../images/img/news7.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa dona máscaras de protección contra el Covid-19 para personal de salud (MINSA)"
    },
    {
        "_id": 7,
        "img": `${require('../images/img/news8.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje"
    },
    {
        "_id": 8,
        "img": `${require('../images/img/news9.png')}`,
        "date": "19/02/2020",
        "title": "Pamolsa inagura nueva planta de Recicloplas"
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