import React, { Fragment } from 'react';
import Header from '../components/Header';
import ClientsComponent from '../components/Clients'
import Footer from '../components/Footer'
import Slicks from '../components/Slicks';
import OurClients from '../components/OurClients'

const Clients = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <OurClients />
            <ClientsComponent />
            <Footer />
        </Fragment>
    );
}

export default Clients;