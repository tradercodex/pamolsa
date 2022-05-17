import React, { Fragment } from 'react';
import { Link as LinkRouter, withRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../styles/pagination.css'
import i18n from "i18next";

const ProductsFilterByLine = ({
    lineBioform,
    productsByFilter,
    t
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
                                    <h5>{i18n.language === 'es' ? product.name : product.tradename}</h5>
                                    {
                                        product.image.map((thumb, index) =>
                                            <div className="img-product" key={index}>
                                                <img src={`https://` + thumb.url} alt="" />
                                            </div>
                                        )
                                    }
                                    <Link to="header" smooth={true} duration={1000} offset={-20000}><LinkRouter to={`/producto/detalle/${product.id}`}>{t('ver_mas')}</LinkRouter></Link>
                                </div>
                            </div>
                        )) :
                        <Fragment>
                            <div className="loading-products">
                                <p>No se encontraron productos</p>
                            </div>
                        </Fragment>
                }
            </div>
        </Fragment>
    );
}

export default withRouter(ProductsFilterByLine);