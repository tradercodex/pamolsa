import React, { Fragment } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import NewsSearch from '../components/NewsSearch';
import Footer from '../components/Footer'

const News = () => {
    return ( 
        <Fragment>
            <Header />
            <Slicks />
            <NewsSearch />
            <Footer />
        </Fragment>
     );
}
 
export default News;