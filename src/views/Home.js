import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import Known from '../components/Known'
import KnownVideo from '../components/KnownVideo';
import News from '../components/News';
import Clients from '../components/Clients';
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import { getNewsHome } from '../redux/actions/new'
import WOW from 'wowjs'
import Popup from '../components/Popup';
import { useTranslation } from 'react-i18next';

const Home = ({ history }) => {

    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsHome)
    const cart = useSelector(state => state.cart)
    const banners = useSelector(state => state.banners.banners)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showPdfModal, setPdfModal] = useState(false);
    const [showPdfAgro, setShowPdfAgro] = useState(false)
    const [showPdfIndustrial, setShowPdfIndustrial] = useState(false)

    const handleShowVideoModal = () => {
        setShowVideoModal(true)
    }

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    const handleShowPdfModal = () => {
        setPdfModal(true)
    }

    const handleShowAgro = () => {
        setShowPdfAgro(true)
    }

    const handleShowIndustrial = () => {
        setShowPdfIndustrial(true)
    }

    const closePdfModal = () => {
        setPdfModal(false)
        setShowPdfAgro(false)
        setShowPdfIndustrial(false)
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
        dispatch(getBanners(4, 1));
        dispatch(getNewsHome());
    }, [cart.cartItems])

    let number = Object.keys(cartItems).length

    const [isOpen, setIsOpen] = useState(true);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const { t } = useTranslation();
    return (
        <div className="Home">
            {/*isOpen && <Popup
                content={<>
                    <img style={{ width: "100%" }} src={require('../images/img/comunicado.png')} />
                </>}
                handleClose={togglePopup}
            />*/}
            <Header
                number={number}
                t={t} />
            <Slicks
                banners={banners}
                t={t} />
            <Known
                history={history}
                closePdfModal={closePdfModal}
                showPdfModal={showPdfModal}
                handleShowPdfModal={handleShowPdfModal}
                showPdfAgro={showPdfAgro}
                handleShowAgro={handleShowAgro}
                handleShowIndustrial={handleShowIndustrial}
                showPdfIndustrial={showPdfIndustrial}
                t={t}
            />
            <KnownVideo
                closeVideoModal={closeVideoModal}
                showVideoModal={showVideoModal}
                handleShowVideoModal={handleShowVideoModal}
                t={t} />
            <News
                news={news}
                t={t}
            />
            <Clients t={t} />
            <Footer t={t} />
        </div>
    );
}

export default Home;
