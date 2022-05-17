import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/distributor.css'
import Footer from '../components/Footer';
import DetailSostenibilityId from '../components/DetailCommunity'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

const DetailCommunity = ({ match }) => {

    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    const id = match.params.name;
    const [community, setCommunity] = useState({
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        file: ''
    })

    const getCommunity = async () => {
        const res = await axios.get(`https://ws.pamolsa.com.pe/api/community/find/${id}`)
        setCommunity({
            title: res.data.data.title,
            title_en: res.data.data.title_en,
            description: res.data.data.description,
            description_en: res.data.data.description_en,
            file: res.data.data.file.url
        })
    }

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

        getCommunity();
        setCartItems(cart.cartItems)
    }, [id, cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <Header number={number} t={t} />
            {
                id ?
                    <DetailSostenibilityId
                        title={community.title}
                        title_en={community.title_en}
                        description={community.description}
                        description_en={community.description_en}
                        file={community.file}
                        t={t}
                    /> : ''
            }
            <Footer t={t} />
        </Fragment>

    );
}

export default DetailCommunity;