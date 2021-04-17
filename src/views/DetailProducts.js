import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import DetailProduct from '../components/DetailProduct'
import { getTypesBusiness, getTypesProducts,getProduct } from '../redux/actions/product'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/quotes.css'
import Footer from '../components/Footer';
import Axios from 'axios';
import ProductsPopulate from '../components/ProductsPopulate';
import axios from 'axios'

const DetailProducts = ({match}) => {

    const id = match.params.id

    const dispatch = useDispatch();
    const business = useSelector(state => state.products.typesBusiness)
    const typesProducts = useSelector(state => state.products.typesProducts)
    const product = useSelector(state => state.products.getProduct)
    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [ relacionates, setRelacionates ] = useState([])
    const [productsItems, setProductsItems] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    const [search, setSearch] = useState('')

    const getRelacionate = async () => {
        const response = await Axios.get(`https://wspamolsa.com.pe/api/product/find/related?product_id=${id}`)
        setRelacionates(response.data.data)
    }

    useEffect(()=> {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')
    
        movilOpen.addEventListener('click',function(){
            header.classList.add('movile-active')
        })
    
        movilClose.addEventListener('click',function(){
            header.classList.remove('movile-active')
        })

        const loadProductsItems = async () => {
            const res = await axios.get('https://wspamolsa.com.pe/api/product/list');
            setProductsItems(res.data.data)
       }

       loadProductsItems();

        dispatch(getTypesBusiness());
        getRelacionate();
        dispatch(getTypesProducts(9,1));
        dispatch(getProduct(id))
        setCartItems(cart.cartItems)
    },[id,cart.cartItems])

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
            <Header number={number} />
            <MenuCategory searchPress={searchPress} search={search} onTextChanged={onTextChanged} renderSuggestions={renderSuggestions} typesBusiness={business} typesProducts={typesProducts} />
            <DetailProduct product={product} />
            <ProductsPopulate relacionates={relacionates} />
            <Footer />
        </Fragment>
     );
}
 
export default DetailProducts;