import React from 'react';

const QuoteProducts = () => {
    return (
        <div className="Products-Quote_pm">
            <div className="Container-Products_Quote_pm">
                <div className="Products-Quote_1">
                    <div className="filter-shadow"></div>
                    <div className="img-bioform_product">
                        <img src={require('../images/img/bioformproducts1.png')} />
                    </div>
                    <div className="info-product_bf">
                        <h4>Línea</h4>
                        <h4>Ecoamigable Bioform</h4>
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="Products-Quote_2">
                <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_2">
                        <h4>Línea Food Service</h4>
                        <button>Ver más</button>
                    </div>
                    <div className="img-bioform_product_2">
                        <img src={require('../images/img/bioformproducts2.png')} />
                    </div>
                </div>
                <div className="Products-Quote_3">
                <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_3">
                        <h4>Línea Industrial Consumo</h4>
                        <button>Cotizar</button>
                    </div>
                    <div className="img-bioform_product_3">
                    <img src={require('../images/img/bioformproducts3.png')} />
                    </div>
                </div>
                <div className="Products-Quote_4">
                <div className="filter-shadow-white"></div>
                    <div className="info-product_bf_4">
                        <h4>Línea Agroinsdustrial</h4>
                        <button>Ver más</button>
                    </div>
                    <div className="img-bioform_product_4">
                        <img src={require('../images/img/bioformproducts4.png')} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QuoteProducts;