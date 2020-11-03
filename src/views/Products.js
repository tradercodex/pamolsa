import React, {Fragment, useEffect} from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'

import { getTypesProducts } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

     const typesProducts = useSelector(state => state.products.typesProducts)
     const dispatch = useDispatch();
 
     useEffect(()=> {
         dispatch(getTypesProducts(8,1));
     },[])

     console.log(typesProducts)

    return ( 
       <Fragment>
            <Header />
            <MenuCategory typesProducts={typesProducts} />
            <QuoteProducts />
            <ProductsPopulate />
            <Footer />
       </Fragment>
     );
}
 
export default Products;