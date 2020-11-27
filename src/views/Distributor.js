import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import Search from '../components/Search'
import '../styles/distributor.css'
import Arrow from '../images/svg/arrowback';
import MapDistributor from '../components/MapDistributor'
import axios from 'axios';
import Marker from '../images/svg/marker';
import Call from '../images/svg/call';

const Distributor = () => {

    const history = useHistory();

    const [ubications, setUbications] = useState([]);

    const getMarkertsApi = async () => {
        const res = await axios.get('http://3.120.185.254:8090/api/distributor/list');
        setUbications(res.data.data);
    }

    const back = () => {
        history.goBack();
    }

    useEffect(() => {
        getMarkertsApi();
    }, [])

    return (
        <Fragment>
            <Header />
            <div className="Distributor-pm">
                <div className="back">
                    <button onClick={back}><Arrow />Volver</button>
                </div>
            </div>
            <div className="Distributor-search">
                <Search />
            </div>
            <div className="container-grid">
                <div className="info-container">
                    <div className="title-blue-container" style={{ marginBottom: "40px" }}>
                        <h3>Puntos de ventas más cercano</h3>
                    </div>
                </div>
            </div>
            <div className="container-grid" style={{ paddingBottom: "50px" }}>
                <div className="info-container" style={{ gridColumn: "2/5" }}>
                    <MapDistributor ubications={ubications} />
                </div>
                <div className="ubications">
                    <div>
                    {
                        ubications && ubications.length > 0 ?
                            ubications.map(item => (
                                <Fragment>
                                    <div className="title-ubication">
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div className="address-ubication">
                                        <Marker /><p>{item.address}</p>
                                    </div>
                                    {
                                        item.phones && item.phones.length > 0 ? 
                                        item.phones.map(item => (
                                            <div className="call-ubication">
                                                {
                                                    item.phone ? <><Call /><p>{item.phone}</p></> : ''
                                                }
                                            </div>
                                        )) : ''
                                    }
                                </Fragment>
                            )) : ''
                    }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Distributor;