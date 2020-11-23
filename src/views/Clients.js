import React, { Fragment, useState,useEffect } from 'react';
import Header from '../components/Header';
import ClientsComponent from '../components/Clients'
import Footer from '../components/Footer'
import Slicks from '../components/Slicks';
import { useSelector } from 'react-redux'
import OurClients from '../components/OurClients'

const Clients = () => {

    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(() => {
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <Header number={number} />
            <Slicks />
            <OurClients />
            <ClientsComponent />
            <Footer />
        </Fragment>
    );
}

export default Clients;