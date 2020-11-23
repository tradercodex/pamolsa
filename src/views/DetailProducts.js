import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import DetailProduct from '../components/DetailProduct'
import { getTypesBusiness, getTypesProducts,getProduct } from '../redux/actions/product'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/quotes.css'
import Footer from '../components/Footer';

const DetailProducts = ({match}) => {

    const id = match.params.id

    const dispatch = useDispatch();
    const business = useSelector(state => state.products.typesBusiness)
    const typesProducts = useSelector(state => state.products.typesProducts)
    const product = useSelector(state => state.products.getProduct)
    const cart = useSelector(state => state.cart)

    const [cartItems, setCartItems] = useState(cart.cartItems)

    useEffect(()=> {
        dispatch(getTypesBusiness());
        dispatch(getTypesProducts(8,1));
        dispatch(getProduct(id))
        setCartItems(cart.cartItems)
    },[id,cart.cartItems])

    let number = Object.keys(cartItems).length

    return ( 
        <Fragment>
            <Header number={number} />
            <MenuCategory typesBusiness={business} typesProducts={typesProducts} />
            <DetailProduct product={product} />
            <Footer />
        </Fragment>
     );
}
 
export default DetailProducts;