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
    GET_PRODUCTS_BY_TYPE,
    GET_PRODUCTS_BY_TYPE_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR
 } from './types'
import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'

export const sendProduct = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/product/save`,data);
        console.log(res.data)
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

export const getLineProducts = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/line/list`);
        console.log(res.data)
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

export const getTypesProducts = (size,page) => async dispatch => {
    try {
        const res = await axios.get(`${root}/product/types/list?size=${size}&page=${page}`);
        console.log(res.data)
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
        console.log(res.data)
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
        console.log(res.data)
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
        console.log(res.data)
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
        console.log(res.data)
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

export const getProductByFilter = (line_id,type_id,material_id,business) => async dispatch => {

    var url;
    var params;

    console.log(business)

    if(line_id) {
        params = [['line_id', line_id]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && material_id) {
        params = [['line_id', line_id],['material_id', material_id]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && type_id) {
        params = [['line_id', line_id],['type_id', type_id]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id && business[0]) {
        params = [['line_id', line_id],['material_id', material_id],['business',business[0]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id && business[0]) {
        params = [['line_id', line_id],['type_id', type_id],['business',business[0]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id && business[0] && business[1]) {
        params = [['line_id', line_id],['type_id', type_id],['business',business[0]],['business',business[1]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id && business[0] && business[1]) {
        params = [['line_id', line_id],['material_id', material_id],['business',business[0]],['business',business[1]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id && business[0] && business[1] && business[2]){
        params = [['line_id', line_id],['material_id', material_id],['business',business[0]],['business',business[1]],['business',business[2]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id && business[0] && business[1] && business[2]){
        params = [['line_id', line_id],['type_id', type_id],['business',business[0]],['business',business[1]],['business',business[2]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    // if(line_id && material_id) {
    //     params = [['line_id', line_id],['material_id',material_id]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(line_id && business[0]) {
    //     params = [['line_id', line_id],['business',business[0]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }


    // if(line_id && business[0] && business[1]) {
    //     params = [['line_id', line_id],['business',business[0]],['business',business[1]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(type_id && material_id) {
    //     params = [['type_id', type_id],['material_id',material_id]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(type_id && business[0]) {
    //     params = [['type_id', type_id],['business',business[0]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(type_id && business[0] && business[1]) {
    //     params = [['type_id', type_id],['business',business[0]],['business',business[1]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(line_id && type_id && material_id) {
    //     params = [['line_id', line_id],['type_id', type_id],['material_id',material_id]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(line_id && type_id && material_id && business[0]) {
    //     params = [['line_id', line_id],['type_id', type_id],['material_id',material_id],['business',business[0]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(line_id && material_id && business[0]) {
    //     params = [['line_id', line_id],['material_id',material_id],['business',business[0]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    // if(line_id && type_id && material_id && business[0] && business[1]) {
    //     params = [['line_id', line_id],['type_id', type_id],['material_id',material_id],['business',business[0]],['business',business[1]]]
    //     url = new URL(root + '/product/list?')
    //     url.search = new URLSearchParams(params).toString()
    // }

    console.log(url)

    try {
        console.log(url)
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
        console.log(res.data)
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
        console.log(res.data)
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
        const res = await axios.put(`${root}/product/delete`,data);
        console.log(res.data)
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
        console.log(res.data)
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


