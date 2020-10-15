import React, { Fragment } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import AboutUs from '../components/Aboutus';
import MisionVision from '../components/Misionvision'
import News from '../components/News';
import Informations from '../components/Informations';
import Etic from '../components/Etic';
import Footer from '../components/Footer';

const Us = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <AboutUs />
            <MisionVision />
            <Informations />
            <News />
            <Etic />
            <Footer />
        </Fragment>
    );
}

export default Us;