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

const DetailProducts = ({match}) => {

    const id = match.params.id

    const dispatch = useDispatch();
    const business = useSelector(state => state.products.typesBusiness)
    const typesProducts = useSelector(state => state.products.typesProducts)
    const product = useSelector(state => state.products.getProduct)
    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [ relacionates, setRelacionates ] = useState([])

    const getRelacionate = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/find/related?product_id=${id}`)
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

        dispatch(getTypesBusiness());
        getRelacionate();
        dispatch(getTypesProducts(9,1));
        dispatch(getProduct(id))
        setCartItems(cart.cartItems)
    },[id,cart.cartItems])

    let number = Object.keys(cartItems).length

    return ( 
        <Fragment>
            <Header number={number} />
            <MenuCategory typesBusiness={business} typesProducts={typesProducts} />
            <DetailProduct product={product} />
            <ProductsPopulate relacionates={relacionates} />
            <Footer />
        </Fragment>
     );
}
 
export default DetailProducts;