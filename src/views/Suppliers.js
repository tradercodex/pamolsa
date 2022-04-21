import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import SuppliersDocuments from '../components/SuppliersDocuments'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import WOW from 'wowjs'
import '../styles/sustainability.css'

// Pdfs
import procedimiento from "../pdf/procedimiento.pdf";
import politicasig from '../images/img/politicasig.webp'
import politicaproteccion from "../pdf/politicaproteccion.pdf";

const Suppliers = () => {

    const cart = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState(cart.cartItems)


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

        new WOW.WOW().init();
        setCartItems(cart.cartItems);
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <div style={{overflow: "hidden"}}>
                <Header number={number} />
                <SuppliersDocuments 
                procedimiento={procedimiento} 
                politicasig={politicasig} 
                politicaproteccion={politicaproteccion}
                />
                <Footer />
            </div>
        </Fragment>
    );
}
 
export default Suppliers;