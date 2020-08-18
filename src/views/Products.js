import React, {Fragment} from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'

const Products = () => {
    return ( 
       <Fragment>
            <Header />
            <MenuCategory />
            <QuoteProducts />
            <ProductsPopulate />
            <Footer />
       </Fragment>
     );
}
 
export default Products;