import React, { Fragment, useState,useEffect } from 'react'
import '../styles/steps.css'
import $ from 'jquery'
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import StepsQuote from '../components/StepsQuote'
import axios from 'axios'
import { removeCart } from '../redux/actions/cart';
import Footer from '../components/Footer'

const Quote = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [departments, setDepartments] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    
    let number = Object.keys(cartItems).length

    const apiDepartments = async () => {
        const response = await axios.get('http://localhost:8090/api/department/list');
        setDepartments(response.data.data)
    }

    const apiProvinces = async () => {
        const response = await axios.get('http://localhost:8090/api/province/list');
        setProvinces(response.data.data)
    }

    const apiDistricts = async () => {
        const response = await axios.get('http://localhost:8090/api/district/list');
        setDistricts(response.data.data)
    }

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "#fff" : "rgba(0, 0, 0, 0.87);",
            fontSize: 16,
            fontFamily: 'Amble-light',
            backgroundColor: state.isSelected ? "#222" : "#fff",
            textAlign: "left",
            cursor: "pointer",
            outline: "none",
        }),
        container: base => ({
            ...base,
            width: "100%"
        }),
        control: (base, state) => ({
            ...base,
            height: 48,
            minHeight: 32,
            fontSize: 14,
            paddingLeft: "20px",
            borderRadius: "50px",
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            outline: "none",
            fontFamily: 'Amble-light',
            borderColor: state.isSelected ? "#C4C4C4" : "#C4C4C4"
        }),
        dropdownIndicator: base => ({
            ...base,
        }),
        indicatorSeparator: base => ({
            ...base,
            display: "none"
        }),
        valueContainer: base => ({
            ...base,
            padding: 0,
            paddingLeft: 2
        })
    };

    useEffect(() => {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')
    
        movilOpen.addEventListener('click',function(){
            header.classList.add('movile-active')
        })
    
        movilClose.addEventListener('click',function(){
            header.classList.remove('movile-active')
        })

        apiDepartments();
        apiProvinces();
        apiDistricts();
        setCartItems(cart.cartItems)
        $(document).ready(function () {
            // click on next button
            $('.form-wizard-next-btn').click(function () {
                var parentFieldset = $(this).parents('.wizard-fieldset');
                var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
                var next = $(this);
                var nextWizardStep = true;
                parentFieldset.find('.wizard-required').each(function () {
                    var thisValue = $(this).val();

                    if (thisValue === "") {
                        $(this).siblings(".wizard-form-error").slideDown();
                        nextWizardStep = false;
                    }
                    else {
                        $(this).siblings(".wizard-form-error").slideUp();
                    }
                });
                if (nextWizardStep) {
                    next.parents('.wizard-fieldset').removeClass("show", "400");
                    currentActiveStep.removeClass('active').addClass('activated').next().addClass('active', "400");
                    next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show", "400");
                    $(document).find('.wizard-fieldset').each(function () {
                        if ($(this).hasClass('show')) {
                            var formAtrr = $(this).attr('data-tab-content');
                            $(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
                                if ($(this).attr('data-attr') === formAtrr) {
                                    $(this).addClass('active');
                                    var innerWidth = $(this).innerWidth();
                                    var position = $(this).position();
                                    $(document).find('.form-wizard-step-move').css({ "left": position.left, "width": innerWidth });
                                } else {
                                    $(this).removeClass('active');
                                }
                            });
                        }
                    });
                }
            });
            //click on form submit button
        });
    }, [cart.cartItems])  

    const deleteProductCart = (product) => {
        dispatch(removeCart(product))
    }

    return (
        <Fragment>
            <Header number={number} />
            <StepsQuote 
                handleShowModal={handleShowModal}
                number={number}
                showModal={showModal}
                selectStyles={selectStyles}
                deleteProductCart={deleteProductCart} 
                departments={departments}
                provinces={provinces}
                districts={districts}
                cartItems={cartItems}
                closeModal={closeModal}
            />
            <Footer/>
        </Fragment>
    );
}

export default Quote;