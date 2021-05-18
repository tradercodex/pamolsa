import {
    GET_LINES_PRODUCTS,
    GET_LINES_PRODUCTS_ERROR,
    GET_TYPES_PRODUCTS,
    GET_TYPES_PRODUCTS_ERROR,
    GET_TYPES_BUSINESS,
    GET_TYPES_BUSINESS_ERROR,
    GET_SUBTYPES_PRODUCTS,
    GET_SUBTYPES_PRODUCTS_ERROR,
    GET_ADD_SUBTYPES_PRODUCTS,
    GET_ADD_SUBTYPES_PRODUCTS_ERROR,
    GET_MATERIALS,
    GET_MATERIALS_ERROR,
    SEND_PRODUCT,
    SEND_PRODUCT_ERROR,
    GET_PRODUCTS_BY_FILTER,
    GET_PRODUCTS_BY_FILTER_ERROR,
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_ERROR,
    DELETE_IMAGE_PRODUCT,
    DELETE_IMAGE_PRODUCT_ERROR,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_ERROR,
    GET_PRODUCTS_BY_TYPE,
    GET_PRODUCTS_BY_TYPE_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR
} from './types'
import axios from 'axios'

const root = 'https://pamolsa-back.herokuapp.com/api'

let token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendProduct = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/product/save`, data, config);
        dispatch({
            type: SEND_PRODUCT,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SEND_PRODUCT_ERROR
        })
    }
}

export const deleteImageProduct = (id) => async dispatch => {
    try {
        const res = await axios.put(`${root}/product/deleteImage?image_id=${id}`, null, config);
        dispatch({
            type: DELETE_IMAGE_PRODUCT,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: DELETE_IMAGE_PRODUCT_ERROR
        })
    }
}

export const updateProduct = (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/product/update`, data, config);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_ERROR
        })
    }
}

export const getLineProducts = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/line/list`);
        dispatch({
            type: GET_LINES_PRODUCTS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_LINES_PRODUCTS_ERROR
        })
    }
}

export const getTypesProducts = (size, page) => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/types/list?size=${size}&page=${page}`);
        dispatch({
            type: GET_TYPES_PRODUCTS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_TYPES_PRODUCTS_ERROR
        })
    }
}

export const getTypesBusiness = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/business/list`);
        dispatch({
            type: GET_TYPES_BUSINESS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_TYPES_BUSINESS_ERROR
        })
    }
}

export const getSubtypes = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/subtypes/list`);
        dispatch({
            type: GET_SUBTYPES_PRODUCTS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_SUBTYPES_PRODUCTS_ERROR
        })
    }
}

export const getAddSubtypes = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/additional/subtypes/list`);
        dispatch({
            type: GET_ADD_SUBTYPES_PRODUCTS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ADD_SUBTYPES_PRODUCTS_ERROR
        })
    }
}

export const getMaterials = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/material/list`);
        dispatch({
            type: GET_MATERIALS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_MATERIALS_ERROR
        })
    }
}

export const getProductByFilter = (line_id, type_id, material_id, business) => async dispatch => {

    var url;
    var params = [];

    params.push(["line_id", line_id])

    type_id.forEach(id => {
        params.push(["type_id", id])
    });

    material_id.forEach(id => {
        params.push(["material_id", id])
    });

    business.forEach(id => {
        params.push(["business", id])
    });

    url = new URL(root + '/product/list?')
    url.search = new URLSearchParams(params).toString()

    try {
        const res = await axios.get(url);
        dispatch({
            type: GET_PRODUCTS_BY_FILTER,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_BY_FILTER_ERROR
        })
    }
}

export const getAllProducts = (page) => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/list?page=${page}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_ERROR
        })
    }
}

export const getProductsByType = (type_id) => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/list?type_id=${type_id}`);
        dispatch({
            type: GET_PRODUCTS_BY_TYPE,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_BY_TYPE_ERROR
        })
    }
}

export const deleteProduct = (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/product/delete`, data, config);
        dispatch({
            type: DELETE_PRODUCT,
            payload: Number(res.data.data.product_id)
        })
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_ERROR
        })
    }
}

export const getProduct = id => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/find?product_id=${id}`)
        dispatch({
            type: GET_PRODUCT,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_ERROR
        })
    }
}


export const getProductByFilterType = (type_id, line_id, material_id, business) => async dispatch => {

    var url;
    var params = [];

    params.push(["type_id", type_id])

    line_id.forEach(id => {
        params.push(["line_id", id])
    });

    material_id.forEach(id => {
        params.push(["material_id", id])
    });

    business.forEach(id => {
        params.push(["business", id])
    });

    url = new URL(root + '/product/list?')
    url.search = new URLSearchParams(params).toString()

    try {
        const res = await axios.get(url);
        dispatch({
            type: GET_PRODUCTS_BY_FILTER,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_BY_FILTER_ERROR
        })
    }
}

export const getProductByFilterBusiness = (business, line_id, type_id, material_id) => async dispatch => {

    var url;
    var params = [];

    params.push(["business", business])

    line_id.forEach(id => {
        params.push(["line_id", id])
    });

    material_id.forEach(id => {
        params.push(["material_id", id])
    });

    type_id.forEach(id => {
        params.push(["type_id", id])
    });

    url = new URL(root + '/product/list?')
    url.search = new URLSearchParams(params).toString()

    try {
        const res = await axios.get(url);
        dispatch({
            type: GET_PRODUCTS_BY_FILTER,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_BY_FILTER_ERROR
        })
    }
}
