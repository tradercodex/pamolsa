import React from 'react';

const QuoteProducts = () => {
    return (
        <div className="Products-Quote_pm">
            <div className="Container-Products_Quote_pm">
                <div className="Products-Quote_1">
                    <div className="tree-left"></div>
                    <div className="tree-right"></div>
                    <div className="bioform"></div>
                    <div className="filter-shadow"></div>
                    <div className="img-bioform_product">
                        <img src={require('../images/img/bioformproduct1.png')} />
                    </div>
                    <div className="info-product_bf">
                        <h4>Conoce nuestra nueva línea Bioform</h4>
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="Products-Quote_2">
                    <div className="tree-right"></div>
                    <div className="tree-left"></div>
                    <div className="info-product_bf_2">
                        <h4>Línea Food Service</h4>
                        <button>Cotizar</button>
                    </div>
                    <div className="img-bioform_product_2">
                        <img src={require('../images/img/bioformproduct2.png')} />
                    </div>
                </div>
                <div className="Products-Quote_3">
                    <div className="pen"></div>
                    <div className="info-product_bf_3">
                        <h4>Línea Industrial Consumo</h4>
                        <button>Cotizar</button>
                    </div>
                    <div className="img-bioform_product_3">
                    <img src={require('../images/img/bioformproduct3.png')} />
                    </div>
                </div>
                <div className="Products-Quote_4">
                    <div className="pen_2"></div>
                    <div className="pen_3"></div>
                    <div className="filter-shadow-blue"></div>
                    <div className="info-product_bf_4">
                        <h4>Línea Agroinsdustrial</h4>
                        <button>Ver más</button>
                    </div>
                    <div className="img-bioform_product_4">
                        <img src={require('../images/img/bioformproduct4.png')} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QuoteProducts;