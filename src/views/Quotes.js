import React, { Fragment } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import Materials from '../components/Materials'

import '../styles/quotes.css'
import Footer from '../components/Footer';
import Products from '../components/Products';

const Quotes = () => {
    return ( 
        <Fragment>
            <Header />
            <MenuCategory />
            <div className="Quotes-pm">
                <div className="Sidebar-Material_Quote">
                    <Materials />
                </div>
                <div className="Products-Quote">
                    <Products />
                </div>
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default Quotes;