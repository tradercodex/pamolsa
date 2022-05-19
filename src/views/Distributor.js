import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import { useSelector } from 'react-redux'
import Search from '../components/Search'
import '../styles/distributor.css'
import Arrow from '../images/svg/arrowback';
import MapDistributor from '../components/MapDistributor'
import axios from 'axios';
import Marker from '../images/svg/marker';
import Call from '../images/svg/call';
import { useTranslation } from 'react-i18next';

const Distributor = () => {

    const history = useHistory();
    const cart = useSelector(state => state.cart)

    const [ubications, setUbications] = useState([]);
    const [ubication, setUbication] = useState([])
    const [place, setPlace] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [cartItems, setCartItems] = useState(cart.cartItems)

    const getMarkertsApi = async () => {
        const res = await axios.get('https://ws.pamolsa.com.pe/api/distributor/list');
        setUbications(res.data.data);
    }

    const getApiGeode = async () => {
        if (latitude && longitude) {
            const res = await axios.get(`https://ws.pamolsa.com.pe/api/distributor/find/point/close?longitude=${longitude}&latitude=${latitude}`)
            setUbication(res.data.data)
        }
    }

    const back = () => {
        history.goBack();
    }

    const onChangeUbication = (e) => {
        setPlace(e.target.value)
    }

    const searchPressUbication = async (e) => {
        if (e.keyCode === 13) {
            const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place},peru&key=AIzaSyCvcH0wnL1CUPM7DpB67vilxA_5wY1DWc0`)
            setLatitude(res.data.results[0].geometry.location.lat || '');
            setLongitude(res.data.results[0].geometry.location.lng || '')
        }
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

        getMarkertsApi();
        getApiGeode();
        setCartItems(cart.cartItems)
    }, [longitude, latitude, cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <div style={{ position: "relative", height: "70px", width: "100%" }}>
                <Header number={number} t={t} />
            </div>
            <div className="Distributor-pm">
                <div className="back">
                    <button onClick={back}><Arrow />{t('volver')}</button>
                </div>
            </div>
            <div className="Distributor-search">
                <Search onChangeUbication={onChangeUbication} searchPressUbication={searchPressUbication} t={t} />
            </div>
            <div className="container-grid distributor">
                <div className="info-container">
                    <div className="title-blue-container" style={{ marginBottom: "40px" }}>
                        {ubication.latitude ? <h3 style={{ width: "700px" }}>{t('home.encontro_punto_venta_buscador')}</h3> : <h3>{t('home.puntos_venta_buscador')}</h3>}
                    </div>
                </div>
            </div>
            <div className="container-grid" style={{ paddingBottom: "50px" }}>
                <div className="info-container map-distributor" style={{ gridColumn: "2/5" }}>
                    <MapDistributor ubications={ubications} ubication={ubication} t={t} />
                </div>
                <div className="ubications">
                    <div>
                        {
                            ubication.latitude ?
                                <Fragment>
                                    <div className="title-ubication">
                                        <h6>{ubication.name}</h6>
                                    </div>
                                    <div className="address-ubication">
                                        <Marker /><p>{ubication.address}</p>
                                    </div>
                                    {
                                        ubication.phones && ubication.phones.length > 0 ?
                                            ubication.phones.map(item => (
                                                <div className="call-ubication" key={item.phone}>
                                                    {
                                                        item.phone ? <><Call /><p>{item.phone}</p></> : ''
                                                    }
                                                </div>
                                            )) : ''
                                    }
                                </Fragment> :
                                <Fragment>
                                    {
                                        ubications.map(item => (
                                            <Fragment key={item.id}>
                                                <div className="title-ubication">
                                                    <h6>{item.name}</h6>
                                                </div>
                                                <div className="address-ubication">
                                                    <Marker /><p>{item.address}</p>
                                                </div>
                                                {
                                                    item.phones && item.phones.length > 0 ?
                                                        item.phones.map(item => (
                                                            <div className="call-ubication" key={item.phone}>
                                                                {
                                                                    item.phone ? <><Call /><p>{item.phone}</p></> : ''
                                                                }
                                                            </div>
                                                        )) : ''
                                                }
                                            </Fragment>
                                        ))
                                    }
                                </Fragment>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Distributor;