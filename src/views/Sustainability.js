import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import InformationSostinibility from '../components/InformationSostenibility'
import News from '../components/News'
import { getCommunities } from '../redux/actions/community'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import WOW from 'wowjs'
import '../styles/sustainability.css'
import { getActivities } from '../redux/actions/activity';

// Pdfs
import sostenibilidad2019 from '../pdf/sostenibilidad2019.pdf'
import sostenibilidad2020 from '../pdf/sostenibilidad2020.pdf'
import sostenibilidad2021 from '../pdf/sostenibilidad2021.pdf'
import { useTranslation } from 'react-i18next';


const Sustainability = () => {

    const communities = useSelector(state => state.communities.communities)
    const activities = useSelector(state => state.activities.activities)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [showVideoModal, setShowVideoModal] = useState(false);

    const handleShowVideoModal = () => {
        setShowVideoModal(true)
    }

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    const handleShowVideoModalSostenibility = () => {
        setShowVideoModal(true)
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

        new WOW.WOW().init();
        setCartItems(cart.cartItems)
        dispatch(getCommunities());
        dispatch(getActivities());
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length
    const { t } = useTranslation();

    return (
        <Fragment>
            <div style={{ overflow: "hidden" }}>
                <Header number={number} t={t} />
                <Slicks t={t} />
                <InformationSostinibility sostenibilidad2019={sostenibilidad2019} sostenibilidad2020={sostenibilidad2020} sostenibilidad2021={sostenibilidad2021} t={t} />
                <News handleShowVideoModalSostenibility={handleShowVideoModalSostenibility} closeVideoModal={closeVideoModal} showVideoModal={showVideoModal} handleShowVideoModal={handleShowVideoModal} communities={communities} activities={activities} t={t} />
                <Footer t={t} />
            </div>
        </Fragment>
    );
}

export default Sustainability;

