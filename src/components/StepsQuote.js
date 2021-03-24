import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ReactSelect from 'react-select'
import DeleteCart from '../images/svg/deletecart';
import { sendCart, updateCard } from '../redux/actions/cart'
import ModalSendCart from './ModalSendCart';

const StepsQuote = ({
    number,
    selectStyles,
    deleteProductCart,
    departments,
    provinces,
    districts,
    cartItems,
    handleShowModal,
    closeModal,
    showModal,
}) => {

    const history = useHistory();
    const { register, handleSubmit, errors, control } = useForm();
    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();

    if (localStorage.getItem('cart') === null) {
        return <div className="no-quote">
            <p>No se encontraron productos en el cotizador, te aconsejamos agregar uno</p>
            <Link className="quote-back" to="/productos">regresar</Link>
        </div>
    }

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    const sendCartItems = (data, e) => {

        const body = {
            fullname: data.fullname,
            cellphone: data.cellphone,
            email: data.email,
            department: data.department.name,
            province: data.province.name,
            district: data.district.name,
            products: cartItems
        }

        if (body) {
            handleShowModal();
            setTimeout(() => {
                dispatch(sendCart(body))
                dispatch(updateCard());
                localStorage.clear();
                history.push('/productos')
            }, 4000);
        }
        e.target.reset();
    }

    return (
        <>
            {
                number > 0 ?
                    <section class="wizard-section">
                        <div class="row no-gutters">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-wizard">
                                    <div class="form-wizard-header movil">
                                        <ul class="list-unstyled form-wizard-steps clearfix">
                                            <li class="active"><span className="quote"></span></li>
                                            <li className=""><span className="quote-aditional"></span></li>
                                        </ul>
                                    </div>
                                    <form onSubmit={handleSubmit(sendCartItems)} className="form-quote">
                                        <fieldset class="wizard-fieldset show">
                                            <div className="quote-count">
                                                <div className="quote-title">
                                                    <h6>Cotizador</h6> <span>{number} productos</span>
                                                </div>
                                            </div>
                                            {
                                                cartItems && cartItems.length > 0 ?
                                                    cartItems.map(item => (
                                                        <div className="box-quote" key={item.id}>
                                                            <div className="info-box-quote">
                                                                <div className="img-quote">
                                                                    <img src={`https://` + item.image} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <p>Producto</p>
                                                                    <h3>{item.name}</h3>
                                                                    <p>Cantidad</p>
                                                                    <div className="input" style={{ marginTop: "10px" }}>
                                                                        <input
                                                                            type="text"
                                                                            disabled
                                                                            name="quantity"
                                                                            placeholder={`${item.quantity}` + " unidades"}
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="delete-quote">
                                                                <button type="button" onClick={() => deleteProductCart(item)}><DeleteCart /><span>Eliminar</span></button>
                                                            </div>
                                                        </div>
                                                    )) : ''
                                            }
                                            <div class="form-group clearfix">
                                                <Link to="/productos" class="form-wizard-previous-btn float-left">Seguir agregando</Link>
                                                <a href="javascript:;" class="form-wizard-next-btn float-right">Siguiente</a>
                                            </div>
                                        </fieldset>
                                        <fieldset class="wizard-fieldset">
                                            <div className="container-send-quote">
                                                <div className="container-dates">
                                                    <div className="container-dates-title">
                                                        <h6>Datos de la cotización</h6>
                                                    </div>
                                                    <div className="container-form-dates">
                                                        <div className="input">
                                                            <input
                                                                type="text"
                                                                name="fullname"
                                                                placeholder="Nombres y apellidos"
                                                                ref={
                                                                    register({
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Ingrese sus nombres completos'
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <span className="complete-form">
                                                            {errors.fullname && errors.fullname.message}
                                                        </span>
                                                        <div className="input">
                                                            <input
                                                                type="text"
                                                                name="cellphone"
                                                                placeholder="Teléfono"
                                                                ref={
                                                                    register({
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Ingrese sus nombres completos'
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <span className="complete-form">
                                                            {errors.cellphone && errors.cellphone.message}
                                                        </span>
                                                        <div className="input">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="E-mail"
                                                                ref={
                                                                    register({
                                                                        required: {
                                                                            value: true,
                                                                            message: 'Ingrese sus nombres completos'
                                                                        }
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                        <span className="complete-form">
                                                            {errors.email && errors.email.message}
                                                        </span>
                                                        <div style={{ marginTop: "23px" }}>
                                                            <Controller
                                                                as={
                                                                    <ReactSelect
                                                                        placeholder="Departamento"
                                                                        styles={selectStyles}
                                                                        options={departments}
                                                                        getOptionLabel={departments => departments.name}
                                                                        getOptionValue={departments => departments.id}
                                                                    />}
                                                                name="department"
                                                                isClearable
                                                                control={control}
                                                                rules={{
                                                                    required: {
                                                                        value: true,
                                                                        message: "Ingrese el departamento"
                                                                    }
                                                                }}
                                                            />
                                                            <span className="complete-form">
                                                                {errors.department && errors.department.message}
                                                            </span>
                                                        </div>
                                                        <div style={{ marginTop: "23px" }}>
                                                            <Controller
                                                                as={
                                                                    <ReactSelect
                                                                        placeholder="Provincia"
                                                                        styles={selectStyles}
                                                                        options={provinces}
                                                                        getOptionLabel={provinces => provinces.name}
                                                                        getOptionValue={provinces => provinces.id}
                                                                    />}
                                                                name="province"
                                                                isClearable
                                                                control={control}
                                                                rules={{
                                                                    required: {
                                                                        value: true,
                                                                        message: "Ingrese la provincia"
                                                                    }
                                                                }}
                                                            />
                                                            <span className="complete-form">
                                                                {errors.province && errors.province.message}
                                                            </span>
                                                        </div>
                                                        <div style={{ marginTop: "23px" }}>
                                                            <Controller
                                                                as={
                                                                    <ReactSelect
                                                                        placeholder="Distrito"
                                                                        styles={selectStyles}
                                                                        options={districts}
                                                                        getOptionLabel={districts => districts.name}
                                                                        getOptionValue={districts => districts.id}
                                                                    />}
                                                                name="district"
                                                                isClearable
                                                                control={control}
                                                                rules={{
                                                                    required: {
                                                                        value: true,
                                                                        message: "Ingrese el distrito"
                                                                    }
                                                                }}
                                                            />
                                                            <span className="complete-form">
                                                                {errors.district && errors.district.message}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="container-quotes-products step-final" style={{ marginBottom: "20px" }}>
                                                    <div className="quote-count">
                                                        <div className="quote-title">
                                                            <h6>Cotizador</h6> <span>{number} productos</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        cartItems && cartItems.length > 0 ?
                                                            cartItems.map(item => (
                                                                <div className="box-quote" key={item.id}>
                                                                    <div className="info-box-quote">
                                                                        <div className="img-quote">
                                                                            <img src={`https://` + item.image} alt="" />
                                                                        </div>
                                                                        <div className="info">
                                                                            <p>Producto</p>
                                                                            <h3>{item.name}</h3>
                                                                            <p>Cantidad</p>
                                                                            <div className="input" style={{ marginTop: "10px" }}>
                                                                                <p>{item.quantity}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="delete-quote">
                                                                        <button type="button" onClick={() => deleteProductCart(item)}><DeleteCart /><span>Eliminar</span></button>
                                                                    </div>
                                                                </div>
                                                            )) : ''
                                                    }
                                                </div>
                                            </div>
                                            <div class="form-group clearfix send-options-quote">
                                                <a href="javascript:;" class="form-wizard-previous-btn float-left">Ir a Ecommerce</a>
                                                <button className="send-cart complete" type="submit" >Enviar cotización</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section> :
                    <div className="no-quote" style={{paddingBottom: "100px"}}>
                        <p>Aún no tienes productos para cotizar, te recomedamos agregar los productos que deseas </p>
                        <Link className="quote-back" to="/productos">Productos</Link>
                    </div>
            }
            { showModal && <ModalSendCart closeModal={closeModal} title="Su cotización fue enviada con exito" subtitle="Muy pronto le responderemos con una cotización ideal para usted" classModalName="thanks-cotizacion" />}
        </>
    );
}

export default StepsQuote;