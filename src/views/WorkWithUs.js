import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import News from '../components/News'
import Footer from '../components/Footer';
import InformationWork from '../components/InformationWork';
import { getVacants } from '../redux/actions/vacant'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

const WorkWithUs = () => {

    const vacants = useSelector(state => state.vacants.vacants)
    const dispatch = useDispatch();

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
        dispatch(getVacants(3, 1));
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="page-new">
                <Header number={number} t={t} />
                <Slicks t={t} />
                <InformationWork t={t} />
                <News vacants={vacants} t={t} />
                <Footer t={t} />
            </div>
        </Fragment>
    );
}

export default WorkWithUs;