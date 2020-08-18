import React from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import Known from '../components/Known'
import KnownVideo from '../components/KnownVideo';
import News from '../components/News';
import Clients from '../components/Clients';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Slicks />
            <Known />
            <KnownVideo />
            <News />
            <Clients />
            <Footer />
        </div>
    );
}

export default Home;