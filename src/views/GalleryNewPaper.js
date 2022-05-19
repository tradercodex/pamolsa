import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link as LinkRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import { getNewsPaper } from '../redux/actions/newpaper'
import Arrow from '../images/svg/arrowback'
import Slider from 'react-slick'
import ModalView from '../components/ModalView'
import { useTranslation } from 'react-i18next';

const GalleryNewPaper = () => {
    const { t } = useTranslation();

    const history = useHistory();

    const newspaper = useSelector(state => state.newspaper.newspaper)
    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [loadingNewspaper, setLoadingNewspaper] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState('')

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const dispatch = useDispatch()

    const apiNewsPaper = () => {
        dispatch(getNewsPaper());
        setLoadingNewspaper(false)
    }

    const back = () => {
        history.replace('/noticias');
    }

    const settingsNewsPaper = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const zoomGallery = (img) => {
        setImg(img)
        handleShowModal();
    }

    useEffect(() => {
        apiNewsPaper();
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    if (loadingNewspaper) {
        return 'Loading'
    }

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <Header number={number} t={t} />
            <div className="Detail-new_pm gallery-paper">
                <div className="back">
                    <button onClick={back}><Arrow />{t('volver')}</button>
                </div>
            </div>
            <div className="container-detail_new news-search" style={{ background: "#f9f9f9" }}>
                <h2>{t('noticias.galeria')}</h2>
                <p className="text">{t('noticias.galeria_texto')}</p>
                {showModal && <ModalView closeModal={closeModal} img={img} />}
                <div className="" style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    margin: "90px auto",
                    height: "auto",
                }}>
                    <Slider {...settingsNewsPaper}>
                        {
                            newspaper && newspaper.length > 0 ?
                                newspaper.map(item => (
                                    <div key={item.id} style={{ maxWidth: "1440px", margin: "0 auto" }}>
                                        <div className="newpaper-gallery" style={{ marginLeft: "20px" }}>
                                            <div className="newpaper-header-gallery">
                                                <img src={`https://` + item.file.url} alt="" />
                                            </div>
                                            <div className="newpaper-body">
                                                <span>{item.created}</span>
                                                <p>{item.name_newspaper}</p>
                                                <Link to="newpaper" smooth={true} duration={1000} offset={-100}><LinkRouter onClick={() => zoomGallery(item.file.url)} >{t('noticias.visualizar')}</LinkRouter></Link>
                                            </div>
                                        </div>
                                    </div>
                                )) : ''
                        }
                    </Slider>
                </div>
            </div>
            <Footer t={t} />
        </Fragment>
    );
}

export default GalleryNewPaper;