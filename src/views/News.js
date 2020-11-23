import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import NewsSearch from '../components/NewsSearch';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions/new';

const News = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const news = useSelector(state => state.news.news)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(() => {
        dispatch(getNews())
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length

    return ( 
        <Fragment>
            <Header number={number} />
            <Slicks />
            <NewsSearch news={news} />
            <Footer />
        </Fragment>
     );
}
 
export default News;