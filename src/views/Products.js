import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTypesProducts, getTypesBusiness } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

     const cart = useSelector(state => state.cart)
     const [cartItems, setCartItems] = useState(cart.cartItems)
     const [productsPopulate, setProductsPopulate] = useState([])
     const typesBusiness = useSelector(state => state.products.typesBusiness)
     const typesProducts = useSelector(state => state.products.typesProducts)
     const dispatch = useDispatch();

     const apiProductsPopulate = async ( ) => {
          const res = await axios.get('http://3.120.185.254:8090/api/product/find/popular')
          setProductsPopulate(res.data.data)
     }

     useEffect(() => {

          const movilOpen = document.getElementById('movil');
          const header = document.getElementById('header')
          const movilClose = document.getElementById('close-movil')
      
          movilOpen.addEventListener('click',function(){
              header.classList.add('movile-active')
          })
      
          movilClose.addEventListener('click',function(){
              header.classList.remove('movile-active')
          })

          setCartItems(cart.cartItems)
          apiProductsPopulate();
          dispatch(getTypesProducts(9, 1));
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
               <div className="page-new">
               <Header number={number} />
               <MenuCategory searchPress={searchPress} typesBusiness={typesBusiness} typesProducts={typesProducts} />
               <QuoteProducts />
               <ProductsPopulate productsPopulate={productsPopulate}/>
               <Footer />
               </div>
          </Fragment>
     );
}

export default Products;