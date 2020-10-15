import React, { Fragment } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import News from '../components/News'
import Footer from '../components/Footer';
import InformationWork from '../components/InformationWork';

const WorkWithUs = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <InformationWork />
            <News />
            <Footer />
        </Fragment>
    );
}

export default WorkWithUs;