import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import QuoteProducts from '../components/QueoteProducts';
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'
import axios from 'axios'
import { getTypesProducts, getTypesBusiness } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

     const cart = useSelector(state => state.cart)
     const [cartItems, setCartItems] = useState(cart.cartItems)
     const [search, setSearch] = useState('')
     const [productsPopulate, setProductsPopulate] = useState([])
     const [display, setDisplay] = useState(false);
     const [options, setOptions] = useState([]);
     const [products, setProducts] = useState();
     const [productsItems, setProductsItems] = useState([]);
     const [suggestions, setSuggestions] = useState([])
     const typesBusiness = useSelector(state => state.products.typesBusiness)
     const typesProducts = useSelector(state => state.products.typesProducts)
     const dispatch = useDispatch();

     const apiProductsPopulate = async () => {
          const res = await axios.get('http://192.168.157.27/api/product/find/popular')
          setProductsPopulate(res.data.data)
     }

     useEffect(() => {

          const movilOpen = document.getElementById('movil');
          const header = document.getElementById('header')
          const movilClose = document.getElementById('close-movil')

          movilOpen.addEventListener('click', function () {
               header.classList.add('movile-active')
          })

          movilClose.addEventListener('click', function () {
               header.classList.remove('movile-active')
          })

          const loadProductsItems = async () => {
               const res = await axios.get('http://192.168.157.27/api/product/list');
               setProductsItems(res.data.data)
          }

          loadProductsItems();
          setCartItems(cart.cartItems)
          apiProductsPopulate();
          dispatch(getTypesProducts(9, 1));
          dispatch(getTypesBusiness());
     }, [cart.cartItems])

     let number = Object.keys(cartItems).length

     const searchPress = (e) => {
          if (e.keyCode === 13) {
               window.location.replace(`/productos/${e.target.value}`)
          }
     }

     const onTextChanged = (e) => {
          const value = e.target.value;
          let suggestions = []
          if (value.length > 0) {
               const regex = new RegExp(`^${value}`, 'i');
               suggestions = productsItems.sort().filter(v => regex.test(v.name));
          }
          setSuggestions(suggestions)
          setSearch(value)
     }

     const suggestionSelected = (value) => {
          setSearch(value);
          setSuggestions([]);
     }


     const renderSuggestions = () => {
          if (suggestions.length === 0) {
               return null
          }
          return (
               <ul className="autocomplete">
                    {suggestions.map((item) => <li onClick={() => suggestionSelected(item.name)}>{item.name}</li>)}
               </ul>
          )
     }

     return (
          <Fragment>
               <div className="page-new">
                    <Header number={number} />
                    <MenuCategory search={search} onTextChanged={onTextChanged} renderSuggestions={renderSuggestions} display={display} options={options} setSearch={setSearch} searchPress={searchPress} typesBusiness={typesBusiness} typesProducts={typesProducts} />
                    <QuoteProducts />
                    <ProductsPopulate productsPopulate={productsPopulate} />
                    <Footer />
               </div>
          </Fragment>
     );
}

export default Products;