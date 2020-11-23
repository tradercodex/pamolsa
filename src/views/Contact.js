import React, { Fragment, useState,useEffect } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const Contact = () => {

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
            <ContactForm />
            <Footer />
        </Fragment>
     );
}
 
export default Contact;