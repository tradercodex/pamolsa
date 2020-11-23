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
        setCartItems(cart.cartItems)
    },[cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <Header number={number} />
            <Slicks />
            <AboutUs />
            <MisionVision />
            <Informations />
            <News />
            <Etic />
            <Footer />
        </Fragment>
    );
}

export default Us;