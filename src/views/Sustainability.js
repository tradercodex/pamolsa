import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import InformationSostinibility from '../components/InformationSostenibility'
import News from '../components/News'
import { getCommunities } from '../redux/actions/community'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import WOW from 'wowjs'
import '../styles/sustainability.css'
import { getActivities } from '../redux/actions/activity';


const Sustainability= () => {

    const communities = useSelector(state => state.communities.communities)
    const activities = useSelector(state => state.activities.activities )
    const dispatch = useDispatch()

    const [showVideoModal, setShowVideoModal] = useState(false);

    const handleShowVideoModal = () => {
        setShowVideoModal(true)
    }

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    useEffect(() => {
        new WOW.WOW().init();
        dispatch(getCommunities());
        dispatch(getActivities());
    }, [])

    return (
        <Fragment>
            <Header />
            <Slicks />
            <InformationSostinibility />
            <News closeVideoModal={closeVideoModal} showVideoModal={showVideoModal} handleShowVideoModal={handleShowVideoModal} communities={communities} activities={activities} />
            <Footer />
        </Fragment>
    );
}
 
export default Sustainability;

