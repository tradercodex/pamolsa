import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import AboutUs from '../components/Aboutus';
import MisionVision from '../components/Misionvision'
import News from '../components/News';
import Informations from '../components/Informations';
import Etic from '../components/Etic';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux'
import '../styles/known.css'

const Us = () => {

    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(()=> {


        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')

        movilOpen.addEventListener('click',function(){
            header.classList.add('movile-active')
        })

        movilClose.addEventListener('click',function(){
            header.classList.remove('movile-active')
        })

        setCartItems(cart.cartItems)
    },[cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <div className="page-new">
            <Header number={number} />
            <Slicks />
            <AboutUs />
            <MisionVision />
            <Informations />
            <News />
            <Etic />
            <Footer />
            </div>
        </Fragment>
    );
}

export default Us;