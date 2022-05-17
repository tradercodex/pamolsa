import React from 'react';
import { Link } from 'react-router-dom'

const QuoteProducts = ({ t }) => {
    return (
        <div className="Products-Quote_pm">
            <div className="Container-Products_Quote_pm">
                <div className="Products-Quote_1">
                    <div className="filter-shadow"></div>
                    <div className="img-bioform_product">
                        <img src={require('../images/img/bioformproducts1.webp')} alt="imagen de productos" />
                    </div>
                    <div className="info-product_bf">
                        <h4>{t('productos.linea_bioform')}</h4>
                        <Link to="productos/linea/2">{t('productos.ver_mas')}</Link>
                    </div>
                </div>
                <div className="Products-Quote_2">
                    <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_2">
                        <h4>{t('productos.linea_food')}</h4>
                        <Link to="productos/linea/1">{t('productos.ver_mas')}</Link>
                    </div>
                    <div className="img-bioform_product_2">
                        <img src={require('../images/img/bioformproducts2.webp')} alt="imagen de productos" />
                    </div>
                </div>
                <div className="Products-Quote_3">
                    <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_3">
                        <h4>{t('productos.linea_industrial')}</h4>
                        <Link to="productos/linea/4">{t('productos.ver_mas')}</Link>
                    </div>
                    <div className="img-bioform_product_3">
                        <img src={require('../images/img/bioformproducts3.webp')} alt="imagen de productos" />
                    </div>
                </div>
                <div className="Products-Quote_4">
                    <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_4">
                        <h4>{t('productos.linea_agro')}</h4>
                        <Link to="productos/linea/3">{t('productos.ver_mas')}</Link>
                    </div>
                    <div className="img-bioform_product_4">
                        <img src={require('../images/img/bioformproducts4.webp')} alt="imagen de productos" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QuoteProducts;
