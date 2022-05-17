import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import ClientsComponent from '../components/Clients'
import Footer from '../components/Footer'
import Slicks from '../components/Slicks';
import { useSelector } from 'react-redux'
import OurClients from '../components/OurClients'
import { useTranslation } from 'react-i18next';

const Clients = () => {

    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(() => {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')

        movilOpen.addEventListener('click', function () {
            header.classList.add('movile-active')
        })

        movilClose.addEventListener('click', function () {
            header.classList.remove('movile-active')
        })

        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <Header number={number} t={t} />
            <Slicks t={t} />
            <OurClients t={t} />
            <ClientsComponent t={t} />
            <Footer t={t} />
        </Fragment>
    );
}

export default Clients;