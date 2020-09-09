import React, { Fragment } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import AboutUs from '../components/Aboutus';
import MisionVision from '../components/Misionvision'
import News from '../components/News';
import Informations from '../components/Informations';
import Footer from '../components/Footer';
import House from '../images/svg/home';
import Hands from '../images/svg/hands';
import ArrowUs from '../images/svg/arrowus';
import World from '../images/svg/world';
import Users from '../images/svg/users';
import Chart from '../images/svg/chartus';

const Us = () => {
    return (
        <Fragment>
            <Header />
            <Slicks />
            <AboutUs />
            <MisionVision />
            <div className="us-values_pm">
                <div>
                    <h6 className="title-values">Nuestros valores</h6>
                </div>
                <div className="img-values">
                    <div>
                        <House />
                        <p>Integridad.</p>
                    </div>
                    <div>
                        <Hands />
                        <p>Respeto.</p>
                    </div>
                    <div>
                        <ArrowUs />
                        <p>Orientación al cliente y usuario.</p>
                    </div>
                    <div>
                        <World />
                        <p>Innovación.</p>
                    </div>

                    <div>
                        <Users />
                        <p>Compromiso social</p>
                    </div>
                    <div>
                        <Chart />
                        <p>Compromiso con los resultados.</p>
                    </div>
                </div>
            </div>
            <News />
            <Informations />
            <Footer />
        </Fragment>
    );
}

export default Us;