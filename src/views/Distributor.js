import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import Search from '../components/Search'
import '../styles/distributor.css'
import Arrow from '../images/svg/arrowback';

const Distributor = () => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <Header />
            <div className="Distributor-pm">
                <div className="back">
                    <button onClick={back}><Arrow/>Volver</button>
                </div>
            </div>
            <div className="Distributor-search">
                <Search />
            </div>
            <div className="container-grid">
                <div className="info-container">
                    <div className="title-blue-container">
                        <h3>Puntos de ventas más cercano</h3>
                    </div>
                </div>
            </div>
            <div className="container-grid">
                <div className="info-container">
                    
                </div>     
            </div>
        </Fragment>
    );
}

export default Distributor;