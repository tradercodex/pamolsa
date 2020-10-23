import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import News from '../components/News'
import Footer from '../components/Footer';
import InformationWork from '../components/InformationWork';
import { getVacants } from '../redux/actions/vacant'
import { useDispatch, useSelector } from 'react-redux'

const WorkWithUs = () => {

    const vacants = useSelector(state => state.vacants.vacants)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getVacants());
    },[])

    return (
        <Fragment>
            <Header />
            <Slicks />
            <InformationWork />
            <News vacants={vacants} />
            <Footer />
        </Fragment>
    );
}

export default WorkWithUs;