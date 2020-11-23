import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import News from '../components/News'
import Footer from '../components/Footer';
import InformationWork from '../components/InformationWork';
import { getVacants } from '../redux/actions/vacant'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'

const WorkWithUs = () => {

    const vacants = useSelector(state => state.vacants.vacants)
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(() => {
        setCartItems(cart.cartItems)
        dispatch(getVacants(3, 1));
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <Header number={number} />
            <Slicks />
            <InformationWork />
            <News vacants={vacants} />
            <Footer />
        </Fragment>
    );
}

export default WorkWithUs;