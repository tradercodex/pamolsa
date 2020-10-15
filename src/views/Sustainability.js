import React, { Fragment } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import InformationSostinibility from '../components/InformationSostenibility'
import News from '../components/News'
import Footer from '../components/Footer'
import WOW from 'wowjs'
import '../styles/sustainability.css'


class Sustainability extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Slicks />
                <InformationSostinibility />
                <News />
                <Footer />
            </Fragment>
        );
    }
}

export default Sustainability;