import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/distributor.css'
import Footer from '../components/Footer';
import DetailNewId from '../components/DetailNew'
import { useDispatch, useSelector } from 'react-redux'
import { getNewId } from '../redux/actions/new'
import { useTranslation } from 'react-i18next';

const DetailNew = ({ match }) => {

    const id = match.params.name;
    const newId = useSelector(state => state.news.new)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

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

        dispatch(getNewId(id))
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <Header number={number} t={t} />
            {
                newId ?
                    <DetailNewId
                        title={newId.title}
                        title_en={newId.title_en}
                        body={newId.body}
                        created={newId.created}
                        place={newId.place}
                        author={newId.author}
                        source={newId.source}
                        file={newId.file.url}
                        t={t}
                    /> : ''
            }
            <Footer t={t} />
        </Fragment>

    );
}

export default DetailNew;