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

const root = 'https://wspamolsa.com.pe/api'

let token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendProduct = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/product/save`,data,config);
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
        const res = await axios.put(`${root}/product/deleteImage?image_id=${id}`,null,config);
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

export const updateProduct= (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/product/update`,data, config);
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

export const getTypesProducts = (size,page) => async dispatch => {
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

export const getProductByFilter = (line_id,type_id,material_id,business) => async dispatch => {

    var url;
    var params;
    // LINEA DE PRODUCTO

    if(line_id) {
        params = [['line_id', line_id]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && material_id[0]) {
        params = [['line_id', line_id],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id[0] && material_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && material_id[0] && material_id[1] && material_id[2]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id[0] && material_id[1] && material_id[2] && material_id[3]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5] && material_id[6]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]],['material_id', material_id[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0]) {
        params = [['line_id', line_id],['type_id', type_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1] && type_id[2]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1] && type_id[2] && business[0]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['type_id',type_id[1]],['type_id',type_id[2]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }


    if(line_id && type_id[0] && type_id[1] && type_id[2] && type_id[3]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]],['type_id', type_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1] && type_id[2] && type_id[3] && type_id[4]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]],['type_id', type_id[3]],['type_id', type_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1] && type_id[2] && type_id[3] && type_id[4] && type_id[5]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]],['type_id', type_id[3]],['type_id', type_id[4]],['type_id', type_id[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && type_id[1] && type_id[2] && type_id[3] && type_id[4] && type_id[5] && type_id[6]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]],['type_id', type_id[3]],['type_id', type_id[4]],['type_id', type_id[5]],['type_id', type_id[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0]) {
        params = [['line_id', line_id],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && business[0] && business[1] && business[2]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['business', business[0]],['business', business[1]],['business', business[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && business[0] && business[1] && business[2] && business[3]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && business[0] && business[1] && business[2] && business[3] && business[4]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && business[0] && business[1] && business[2] && business[3] && business[4] && business[5]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && type_id[0] && business[0] && business[1] && business[2] && business[3] && business[4] && business[5] && business[6]) {
        params = [['line_id', line_id],['type_id',type_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]],['business', business[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

     if(line_id && business[0]) {
        params = [['line_id', line_id],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1] && business[2]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['business', business[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1] && business[2] && business[3]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1] && business[2] && business[3] && business[4]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1] && business[2] && business[3] && business[4] && business[5]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && business[1] && business[2] && business[3] && business[4] && business[5] && business[6]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]],['business', business[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(line_id && business[0] && material_id[0]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && material_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && business[1] && material_id[0] && material_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && business[1] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['line_id', line_id],['business', business[0]],['business', business[1]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && type_id[0]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['type_id', type_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && type_id[0]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['type_id', type_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && type_id[0] && type_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['type_id', type_id[0]],['type_id', type_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && type_id[0] && type_id[1]) {
        params = [['line_id', line_id],['type_id', type_id[0]],['type_id', type_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && type_id[0] && type_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['type_id', type_id[0]],['type_id', type_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(line_id && business[0] && material_id[0] && material_id[1] && type_id[0] && type_id[1]) {
        params = [['line_id', line_id],['material_id', material_id[0]],['material_id', material_id[1]],['type_id', type_id[0]],['type_id', type_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

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
        const res = await axios.put(`${root}/product/delete`,data,config);
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


export const getProductByFilterType = (type_id,line_id,material_id,business) => async dispatch => {

    var url;
    var params;
    // LINEA DE PRODUCTO

    if(type_id) {
        params = [['type_id', type_id]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && material_id[0]) {
        params = [['type_id', type_id],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && material_id[0] && material_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && material_id[0] && material_id[1] && material_id[2]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && material_id[0] && material_id[1] && material_id[2] && material_id[3]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5] && material_id[6]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]],['material_id', material_id[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0]) {
        params = [['type_id', type_id],['line_id', line_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && line_id[1]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && line_id[1] && line_id[2]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && line_id[1] && line_id[2] && business[0]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id',line_id[1]],['line_id',line_id[2]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }


    if(type_id && line_id[0] && line_id[1] && line_id[2] && line_id[3]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && line_id[1] && line_id[2] && line_id[3] && line_id[4]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]],['line_id', line_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && line_id[1] && line_id[2] && line_id[3] && line_id[4] && line_id[5]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0]) {
        params = [['type_id', type_id],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && business[0] && business[1] && business[2]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['business', business[0]],['business', business[1]],['business', business[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && business[0] && business[1] && business[2] && business[3]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && business[0] && business[1] && business[2] && business[3] && business[4]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && business[0] && business[1] && business[2] && business[3] && business[4] && business[5]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && line_id[0] && business[0] && business[1] && business[2] && business[3] && business[4] && business[5] && business[6]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]],['business', business[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

     if(type_id && business[0]) {
        params = [['type_id', type_id],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1] && business[2]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['business', business[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1] && business[2] && business[3]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1] && business[2] && business[3] && business[4]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1] && business[2] && business[3] && business[4] && business[5]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && business[1] && business[2] && business[3] && business[4] && business[5] && business[6]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['business', business[2]],['business', business[3]],['business', business[4]],['business', business[5]],['business', business[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(type_id && business[0] && material_id[0]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && material_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && business[1] && material_id[0] && material_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['business', business[0]],['business', business[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && business[1] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['type_id', type_id],['business', business[0]],['business', business[1]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && line_id[0]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['line_id',line_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && line_id[0]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['line_id',line_id[0]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && line_id[0] && line_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['line_id',line_id[0]],['line_id', line_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && line_id[0] && line_id[1]) {
        params = [['type_id', type_id],['line_id',line_id[0]],['line_id', line_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && line_id[0] && line_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['line_id',line_id[0]],['type_id', type_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(type_id && business[0] && material_id[0] && material_id[1] && line_id[0] && line_id[1]) {
        params = [['type_id', type_id],['material_id', material_id[0]],['material_id', material_id[1]],['line_id',line_id[0]],['line_id', line_id[1]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

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

export const getProductByFilterBusiness = (business,line_id,type_id,material_id) => async dispatch => {

    var url;
    var params;
    // LINEA DE PRODUCTO

    if(business) {
        params = [['business', business]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && material_id[0]) {
        params = [['business', business],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && type_id[0]) {
        params = [['business', business],['type_id', type_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]]]
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && material_id[0] && material_id[1] && material_id[2]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && material_id[3]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5] && material_id[6]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]],['material_id', material_id[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0]) {
        params = [['business', business],['line_id', line_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1] && line_id[2]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1] && line_id[2] && business[0]) {
        params = [['business', business],['line_id',line_id[0]],['line_id',line_id[1]],['line_id',line_id[2]],['business', business[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }


    if(business && line_id[0] && line_id[1] && line_id[2] && line_id[3]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1] && line_id[2] && line_id[3] && line_id[4]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]],['line_id', line_id[4]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1] && line_id[2] && line_id[3] && line_id[4] && line_id[5]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]],['line_id', line_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[1]) {
        params = [['business', business],['line_id', line_id[0]],['line_id', line_id[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && line_id[0] && line_id[1] && line_id[2]) {
        params = [['business', business],['line_id',line_id[0]],['line_id', line_id[0]],['line_id', line_id[1]],['line_id', line_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5]) {
        params = [['business', business],['line_id',line_id[0]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && material_id[0] && material_id[1] && material_id[2] && material_id[3] && material_id[4] && material_id[5] && material_id[6]) {
        params = [['business', business],['line_id',line_id[0]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['material_id', material_id[4]],['material_id', material_id[5]],['material_id', material_id[6]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

     if(business && material_id[0]) {
        params = [['business', business],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && type_id[0] && type_id[1]) {
        params = [['business', business],['type_id', type_id[0]],['type_id', type_id[1]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && type_id[0] && type_id[1] && type_id[2]) {
        params = [['business', business],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && type_id[0] && type_id[1] && type_id[2] && type_id[3]) {
        params = [['business', business],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]],['type_id', type_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && type_id[0] && type_id[1] && type_id[2]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['type_id', type_id[0]],['type_id', type_id[1]]] 
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && type_id[0] && type_id[1] && type_id[2]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && material_id[0] && material_id[1] && material_id[2] && material_id[3] && type_id[0] && type_id[1] && type_id[2]) {
        params = [['business', business],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]],['type_id', type_id[0]],['type_id', type_id[1]],['type_id', type_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    }

    if(business && line_id[0] && material_id[0]) {
        params = [['business', business],['line_id', line_id[0]],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && line_id[0] && line_id[1] && material_id[0]) {
        params = [['business', business],['line_id', line_id[0]],['line_id', line_id[1]],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && line_id[0] && line_id[1] && type_id[0] && material_id[0]) {
        params = [['business', business],['line_id', line_id[0]],['line_id', line_id[1]],['type_id', type_id[0]],['material_id', material_id[0]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && line_id[0] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['business', business],['line_id', line_id[0]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

    if(business && line_id[0] && line_id[1] && material_id[0] && material_id[1] && material_id[2]) {
        params = [['business', business],['line_id', line_id[0]],['line_id', line_id[1]],['material_id', material_id[0]],['material_id', material_id[1]],['material_id', material_id[2]],['material_id', material_id[3]]]  
        url = new URL(root + '/product/list?')
        url.search = new URLSearchParams(params).toString()
    } 

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
