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

const Home = () => {

    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsHome)
    const cart = useSelector(state => state.cart)
    const banners = useSelector(state => state.banners.banners)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showPdfModal, setPdfModal] = useState(false);
    const [showPdfAgro,setShowPdfAgro] = useState(false)
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

    useEffect(()=> {
        new WOW.WOW().init();
        setCartItems(cart.cartItems)
        dispatch(getBanners(4,1));
        dispatch(getNewsHome());
    },[cart.cartItems])

    let number = Object.keys(cartItems).length

    return (
        <div className="Home">
            <Header number={number} />
            <Slicks banners={banners} />
            <Known 
                closePdfModal={closePdfModal} 
                showPdfModal={showPdfModal} 
                handleShowPdfModal={handleShowPdfModal}
                showPdfAgro={showPdfAgro}
                handleShowAgro={handleShowAgro}
                handleShowIndustrial={handleShowIndustrial}
                showPdfIndustrial={showPdfIndustrial}
             />
            <KnownVideo closeVideoModal={closeVideoModal} showVideoModal={showVideoModal} handleShowVideoModal={handleShowVideoModal}  />
            <News news={news} />
            <Clients />
            <Footer />
        </div>
    );
}

export default Home;