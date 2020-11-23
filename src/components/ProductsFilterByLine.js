import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../styles/pagination.css'

const ProductsFilterByLine = ({
    lineBioform,
    products,
    productsByFilter
}) => {

    return (

        <Fragment>
            <div className="products-default">
                {
                    productsByFilter && productsByFilter.length > 0 ?
                        productsByFilter.map(product => (
                            <div key={product.id}>
                                <div className="product">
                                    <div className={`square-products ` + lineBioform}></div>
                                    <h5>{product.name}</h5>
                                    {
                                        product.image.map((thumb, index) =>
                                            <div className="img-product" key={index}>
                                                <img src={`http://` + thumb.url} alt="" />
                                            </div>
                                        )
                                    }
                                    <Link to={`/producto/detalle/${product.id}`}>Ver más</Link>
                                </div>
                            </div>
                        )) :
                        <Fragment>
                            {
                                products && products.length > 0 ?
                                    products.map(product => (
                                        <div key={product.id}>
                                            <div className="product">
                                                <div className={`square-products ` + lineBioform}></div>
                                                <h5>{product.name}</h5>
                                                {

                                                    product.image.map((thumb, index) =>
                                                        <div className="img-product" key={index}>
                                                            <img src={`http://` + thumb.url} alt="" />
                                                        </div>
                                                    )
                                                }
                                                <Link to={`/producto/detalle/${product.id}`}>Ver más</Link>
                                            </div>
                                        </div>
                                    )) :
                                    <div className="loading-products">
                                        <p>No se encontraron productos</p>
                                    </div>
                            }
                        </Fragment>
                }
            </div>
        </Fragment>
    );
}

export default withRouter(ProductsFilterByLine);