import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import NewsSearch from '../components/NewsSearch';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/actions/new';

const News = () => {

    const news = useSelector(state => state.news.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return ( 
        <Fragment>
            <Header />
            <Slicks />
            <NewsSearch news={news} />
            <Footer />
        </Fragment>
     );
}
 
export default News;