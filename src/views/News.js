import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import NewsSearch from '../components/NewsSearch';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions/new';
import { useTranslation } from 'react-i18next';

const News = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const news = useSelector(state => state.news.news)

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

        dispatch(getNews())
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="page-new">
                <Header number={number} t={t} />
                <Slicks t={t} />
                <NewsSearch news={news} t={t} />
                <Footer t={t} />
            </div>
        </Fragment>
    );
}

export default News;