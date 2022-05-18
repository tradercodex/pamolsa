import React, { Fragment } from 'react'
import '../styles/detail.css'
import { useForm } from 'react-hook-form'
import { addToCart } from '../redux/actions/cart'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Slider from "react-slick";
import i18n from "i18next";

const DetailProduct = ({ product, t }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        const { id, name, code } = product
        const body = {
            product_id: id,
            name: name,
            quantity: data.units,
            image: product.image[0].url,
            code: code,
            units: "unidades"
        }
        dispatch(addToCart(body))
        history.push('/cotizador');
        e.target.reset();
    }

    const back = () => {
        history.goBack();
    }

    const settingsProducts = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };

    return (
        <Fragment>
            <div className="Detail-Product_pm movil">
                <div className="container-detail">
                    <div className="guide-detail_product">
                        <p>{t('productos.producto_mayuscula') + ` / ` + (i18n.language === 'es' ? product.name : product.tradename)}</p><button onClick={back}><span>{t('volver')}</span></button>
                    </div>
                    <div className="container-detail_product">
                        <div className="img-detail_product">
                            <div className="product">
                                <div className="square-products"></div>
                                <div className="img-product">
                                    <Slider {...settingsProducts}>
                                        {
                                            product.image && product.image.length > 0 ?
                                                product.image.map(item => (
                                                    <img src={`https://` + item.url} alt={`imagen` + item.url} />
                                                )) : ''
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="detail-info">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="title-detail_product">
                                    <h4>{i18n.language === 'es' ? product.name : product.tradename}</h4>
                                </div>
                                <div className="list-detailt_product">
                                    <ul>
                                        <li>
                                            <div>{t('productos.material')}</div><p>{product.material.name}</p>
                                        </li>
                                        <li className="gray">
                                            <div>{t('productos.largo')} ({product.long_unit == null ? "cm" : product.long_unit})</div>
                                            <p>{product.long !== null && product.long !== "0.00" ? product.long : null}</p>
                                        </li>
                                        <li>
                                            <div>{t('productos.ancho')} ({product.width_unit == null ? "cm" : product.width_unit})</div>
                                            <p>{product.width !== null && product.width !== "0.00" ? product.width : null}</p>
                                        </li>
                                        <li className="gray">
                                            <div>{t('productos.altura')} ({product.height_unit == null ? "cm" : product.height_unit})</div>
                                            <p>{product.height !== null && product.height !== "0.00" ? product.height : null}</p>
                                        </li>
                                        <li>
                                            <div>{t('productos.diametro')} ({product.diameter_unit == null ? "mm" : product.diameter_unit})</div>
                                            <p>{product.diameter !== null && product.diameter !== "0.00" ? product.diameter : null}</p>
                                        </li>
                                        <li className="gray">
                                            <div>{t('productos.peso')} ({product.weight_unit == null ? "gr" : product.weight_unit})</div>
                                            <p>{product.weight !== null && product.weight !== "0.00" ? product.weight : null}</p>
                                        </li>
                                        {
                                            product.unit_quantity !== null ?
                                                <li>
                                                    <div>{product.unit}</div><p>{product.unit_quantity}</p>
                                                </li> :

                                                product.unit !== null && product.unit !== "" ?
                                                    <li>
                                                        <div>{t('productos.unidades')}</div>
                                                        <p>{product.unit !== null ? product.unit : null}</p>
                                                    </li> : null

                                        }
                                    </ul>
                                </div>
                                <div className="whant-need">
                                    <label>{t('productos.cuantas_unidades')}</label>
                                    <input
                                        type="number"
                                        name="units"
                                        placeholder={t('productos.max')}
                                        ref={
                                            register({
                                                min: 1, max: 1000,
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese cuantas unidades desea'
                                                }
                                            })
                                        }
                                    />
                                    <span className="complete-form">
                                        {errors.units && errors.units.message}
                                    </span>
                                </div>
                                <div className="used whant-need">
                                    <label>{t('productos.tipos_negocio')}</label>
                                    <div className="categories-business used">
                                        {
                                            product.business && product.business.length > 0 ?
                                                product.business.map(item => (
                                                    <div className="business-choose">
                                                        <button type="button">
                                                            <img className="detail-product" src={`https://` + item.url} alt="" />
                                                            {i18n.language === 'es' ? item.name : item.name_en}
                                                        </button>
                                                    </div>
                                                )) : ''
                                        }
                                    </div>
                                </div>
                                <div className="btn-cotize">
                                    <button type="submit">{t('productos.agregar_cotizador')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DetailProduct;