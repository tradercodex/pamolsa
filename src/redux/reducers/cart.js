import { ADD_CART, DELETE_CART } from '../actions/types'

const initialState = {
    cartItems: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            state = {
                ...state,
                cartItems: action.payload.cartItems
            }
        case DELETE_CART:
            state = {
                cartItems: action.payload.cartItems
            }
        default:
            return state;
    }
}