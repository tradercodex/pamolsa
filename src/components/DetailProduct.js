import React, { Fragment } from 'react'
import '../styles/detail.css'
import { useForm } from 'react-hook-form'
import { addToCart } from '../redux/actions/cart'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Slider from "react-slick";

const DetailProduct = ({ product }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        const { id,name,code } = product
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
                        <p>{`PRODUCTO /` + product.name}</p><button onClick={back}><span>Volver</span></button>
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
                                            <img src={`http://` + item.url} alt="imagen" />
                                        )) : ''
                                    }
                                </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="detail-info">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="title-detail_product">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="list-detailt_product">
                                    <ul>
                                        <li>
                                            <div>Material</div><p>{product.material.name}</p>
                                        </li>
                                        <li className="gray">
                                            <div>Largo (cm)</div><p>{product.long}</p>
                                        </li>
                                        <li>
                                            <div>Ancho(cm)</div><p>{product.width}</p>
                                        </li>
                                        <li className="gray">
                                            <div>Altura(cm)</div><p>{product.height}</p>
                                        </li>
                                        <li>
                                            <div>Diametro(mm)</div><p>{product.diameter}</p>
                                        </li>
                                        <li className="gray">
                                            <div>Peso(gr)</div><p>{product.weight}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="whant-need">
                                    <label>Cuantas unidades necesitas</label>
                                    <input 
                                        type="number" 
                                        name="units" 
                                        placeholder="1000 unidades" 
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
                                    <label>Usos frecuentes</label>
                                    <div className="categories-business used">
                                        {
                                            product.business && product.business.length > 0 ?
                                            product.business.map(item => (
                                                <div className="business-choose">
                                                    <button type="button"><img className="detail-product" src={`http://` + item.url} alt=""/>{item.name}</button>
                                                </div>
                                            )) : ''
                                        }
                                    </div>
                                </div>
                                <div className="btn-cotize">
                                    <button type="submit">Agregar al cotizador</button>
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