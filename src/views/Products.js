import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom'

import { getTypesProducts, getTypesBusiness } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

     const history = useHistory();
     const cart = useSelector(state => state.cart)
     const [cartItems, setCartItems] = useState(cart.cartItems)
     const [productsQuery, setProductsQuery] = useState([])
     const typesBusiness = useSelector(state => state.products.typesBusiness)
     const typesProducts = useSelector(state => state.products.typesProducts)
     const [search, setSearch] = useState('')
     const dispatch = useDispatch();

     useEffect(() => {
          setCartItems(cart.cartItems)
          dispatch(getTypesProducts(8, 1));
          dispatch(getTypesBusiness());
     }, [cart.cartItems])

     let number = Object.keys(cartItems).length

     const searchPress = (e) => {
          if(e.keyCode === 13) {
               window.location.replace(`/productos/${e.target.value}`)
          }
     }

     return (
          <Fragment>
               <Header number={number} />
               <MenuCategory searchPress={searchPress} setSearch={setSearch} setProductsQuery={setProductsQuery} typesBusiness={typesBusiness} typesProducts={typesProducts} />
               <QuoteProducts />
               <ProductsPopulate />
               <Footer />
          </Fragment>
     );
}

export default Products;