import {
    GET_TYPES_PRODUCTS,
    GET_TYPES_BUSINESS,
    GET_SUBTYPES_PRODUCTS,
    GET_LINES_PRODUCTS,
    GET_ADD_SUBTYPES_PRODUCTS,
    GET_MATERIALS,
    GET_PRODUCTS_BY_FILTER,
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT,
    GET_PRODUCTS_BY_TYPE,
    GET_PRODUCT,
    UPDATE_PRODUCT
} from '../actions/types'

const initialState = {
    products: [],
    lineProducts: [],
    typesProducts: [],
    productsByTypes: [],
    typesBusiness: [],
    subTypesProducts: [],
    addSubTypesProducts: [],
    materials: [],
    productsByFilter: [],
    getProduct: {
        material: {
            name: ''
        },
        image: [
            {
                url: ''
            }
        ]
    }
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case GET_PRODUCT:
            return {
                ...state,
                getProduct: payload
            }
        case GET_LINES_PRODUCTS:
            return {
                ...state,
                lineProducts: payload
            }
        case GET_TYPES_PRODUCTS:
            return {
                ...state,
                typesProducts: payload
            }
        case GET_TYPES_BUSINESS:
            return {
                ...state,
                typesBusiness: payload
            }
        case GET_SUBTYPES_PRODUCTS:
            return {
                ...state,
                subTypesProducts: payload
            }
        case GET_ADD_SUBTYPES_PRODUCTS:
            return {
                ...state,
                addSubTypesProducts: payload
            }
        case GET_MATERIALS:
            return {
                ...state,
                materials: payload
            }
        case GET_PRODUCTS_BY_FILTER:
            return {
                ...state,
                productsByFilter: payload
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCTS_BY_TYPE:
            return {
                ...state,
                productsByTypes: payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== payload)
            }
        default:
            return state;
    }
}