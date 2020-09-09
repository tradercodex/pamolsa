import React, { Fragment } from 'react'
import '../styles/detail.css'
import Restaurant from '../images/svg/restaurant'
import Bakery from '../images/svg/bakery'
import Coffe from '../images/svg/coffe'
import Delivery from '../images/svg/delivery'
import Fish from '../images/svg/fish'
import ProductsPopulate from '../components/ProductsPopulate'

const DetailProduct = () => {
    return (
        <Fragment>
            <div className="Detail-Product_pm">
                <div className="container-detail">
                    <div className="guide-detail_product">
                        <p>Lina de producto / Envases rectangulares / <span>Bioform_carton</span></p>
                    </div>
                    <div className="container-detail_product">
                        <div className="img-detail_product">
                            <div className="product">
                                <div className="square-products"></div>
                                <div className="img-product">
                                    <img src={require('../images/img/cartondetail.png')} />
                                </div>
                            </div>
                        </div>
                        <div className="detail-info">
                            <div className="title-detail_product">
                                <h4>Plato bandeja 2D2 Bioform Carton P15</h4>
                            </div>
                            <div className="list-detailt_product">
                                <ul>
                                    <li>
                                        <div>Material</div><p>Cartón de Bagazo de caña</p>
                                    </li>
                                    <li className="gray">
                                        <div>Largo (cm)</div><p>16.14</p>
                                    </li>
                                    <li>
                                        <div>Ancho(cm)</div><p>14.12</p>
                                    </li>
                                    <li className="gray">
                                        <div>Altura(cm)</div><p>3.75</p>
                                    </li>
                                    <li>
                                        <div>Diametro(mm)</div><p>0</p>
                                    </li>
                                    <li className="gray">
                                        <div>Peso(gr)</div><p>9.9</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="whant-need">
                                <label>Cuantas unidades necesitas</label>
                                <input type="text" placeholder="1000 unidades" />
                            </div>
                            <div className="used whant-need">
                                <label>Usos frecuentes</label>
                                <div className="categories-business used">
                                    <div className="business-choose">
                                        <button><Restaurant />Restaurante</button>
                                    </div>
                                    <div className="business-choose">
                                        <button><Bakery />Panaderia</button>
                                    </div>
                                    <div className="business-choose">
                                        <button><Coffe />Cafeteria</button>
                                    </div>
                                    <div className="business-choose">
                                        <button><Delivery />Delivery</button>
                                    </div>
                                    <div className="business-choose">
                                        <button><Fish />Chifa</button>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-cotize">
                                <button>Agregar al cotizador</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductsPopulate title="Productos relacionados" />
        </Fragment>
    );
}

export default DetailProduct;