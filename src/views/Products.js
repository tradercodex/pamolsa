import React, {Fragment, useEffect, useState} from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'

import { getTypesProducts, getTypesBusiness } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

     const cart = useSelector(state => state.cart)
     const [cartItems, setCartItems] = useState(cart.cartItems)

     const typesBusiness = useSelector(state => state.products.typesBusiness)
     const typesProducts = useSelector(state => state.products.typesProducts)
     const dispatch = useDispatch();
 
     useEffect(()=> {
         setCartItems(cart.cartItems)
         dispatch(getTypesProducts(8,1));
         dispatch(getTypesBusiness());
     },[cart.cartItems])

     let number = Object.keys(cartItems).length

     const resetCheckbox = () => {
          
     }

    return ( 
       <Fragment>
            <Header number={number} />
            <MenuCategory resetCheckbox={resetCheckbox} typesBusiness={typesBusiness} typesProducts={typesProducts} />
            <QuoteProducts />
            <ProductsPopulate />
            <Footer />
       </Fragment>
     );
}
 
export default Products;