import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'

const products = [
    {
        "_id": 0,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 1,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 2,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 3,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 4,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 5,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 6,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 7,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 8,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
]

const ProductsFilter = ({ productsFilter, productsByType, match }) => {

    let name = match.params.name

    return (

        <Fragment>
            {
                productsFilter && productsFilter.length > 0 ?
                    '' : 
            <p style={{marginTop:"20px",fontFamily: "Amble-bold", color: "#4D4D4C",fontSize: "10px"}}>No se encontraron resultados por filtro, estos son nuestros <span style={{color: "#009FE3"}}>{name}</span></p>
            }
            <div className="products-default">

                {
                    productsFilter && productsFilter.length > 0 ?
                        productsFilter.map(product => (
                            <div key={product.id}>
                                <div className="product">
                                    <div className="square-products"></div>
                                    <h5>{product.name}</h5>
                                    {
                                        product.images.map((thumb, index) =>
                                            <div className="img-product" key={index}>
                                                <img src={`http://` + thumb.url} alt="" />
                                            </div>
                                        )
                                    }
                                    <Link to={`/productos/detalle/${product.id}`}>Ver más</Link>
                                </div>
                            </div>
                        )) :
                        <Fragment>
                            {
                                productsByType && productsByType.length > 0 ?
                                    productsByType.map(product => (
                                        <div key={product.id}>
                                            <div className="product">
                                                <div className="square-products"></div>
                                                <h5>{product.name}</h5>
                                                {
                                                    product.images.map((thumb, index) =>
                                                        <div className="img-product" key={index}>
                                                            <img src={`http://` + thumb.url} alt="" />
                                                        </div>
                                                    )
                                                }
                                                <Link to={`/productos/detalle/${product.id}`}>Ver más</Link>
                                            </div>
                                        </div>

                                    )) :<p style={{fontFamily: "Amble-bold", color: "#4D4D4C",fontSize: "10px",marginBottom: "20px"}}>Upss! parace que no se encontraron productos de este tipo</p>
                            }
                        </Fragment>
                }
            </div>
        </Fragment>
    );
}

export default withRouter(ProductsFilter);