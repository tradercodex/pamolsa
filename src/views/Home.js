import React, { useEffect } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import Known from '../components/Known'
import KnownVideo from '../components/KnownVideo';
import News from '../components/News';
import Clients from '../components/Clients';
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsHome } from '../redux/actions/new'

const Home = () => {

    const news = useSelector(state => state.news.newsHome)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getNewsHome());
    },[])

    return (
        <div className="Home">
            <Header />
            <Slicks />
            <Known />
            <KnownVideo />
            <News news={news} />
            <Clients />
            <Footer />
        </div>
    );
}

export default Home;