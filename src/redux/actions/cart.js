import { ADD_CART, DELETE_CART, SEND_CART, SEND_CART_ERROR } from './types'
import axios from 'axios'
import store from '../store'
const root = 'http://192.168.157.27/api'

export const addToCart = (product) => {
    return async dispatch => {
        console.log(product)
        const cartItems = store.getState().cart.cartItems.slice();
        cartItems.push({ ...product })
        localStorage.setItem('cart', JSON.stringify(cartItems))
        dispatch({
            type: ADD_CART,
            payload: { cartItems }
        })
    }
}

export const updateCard = () => {
    return async dispatch => {
        let cartItems = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : null
        if (cartItems) {
            dispatch({
                type: ADD_CART,
                payload: { cartItems }
            })
        }
    }
}

export const removeCart = (product) => {
    return async dispatch => {
        const cartItems = store.getState().cart.cartItems.slice().filter(x => x.product_id !== product.product_id);
        dispatch({ type: DELETE_CART, payload: { cartItems } });
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
}

export const sendCart = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/quote/save`, data);
        dispatch({
            type: SEND_CART,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_CART_ERROR
        })
    }
}