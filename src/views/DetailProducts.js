import React, { Fragment } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import DetailProduct from '../components/DetailProduct'

import '../styles/quotes.css'
import Footer from '../components/Footer';

const DetailProducts = () => {
    return ( 
        <Fragment>
            <Header />
            <MenuCategory />
            <DetailProduct />
            <Footer />
        </Fragment>
     );
}
 
export default DetailProducts;