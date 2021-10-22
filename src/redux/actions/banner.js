import { SEND_BANNER, SEND_BANNER_ERROR, GET_BANNER, GET_BANNER_ERROR, DELETE_BANNER, DELETE_BANNER_ERROR } from './types'
import axios from 'axios'

const root = 'https://ws.pamolsa.com.pe/api'

const token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendBanner = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/home/saveImage`, data);
        dispatch({
            type: SEND_BANNER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_BANNER_ERROR
        })
    }
}

export const getBanners = (size,page) => async dispatch => {
    try {
        const res = await axios.get(`${root}/home/listImage?size=${size}&page=${page}`);
        dispatch({
            type: GET_BANNER,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_BANNER_ERROR
        })
    }
}

export const deleteBanner = (id) => async dispatch => {
    try {
        const res = await axios.put(`${root}/home/deleteImage`, id, config);
        dispatch({
            type: DELETE_BANNER,
            payload: Number(res.data.data.home_id)
        })
    } catch (error) {
        dispatch({
            type: DELETE_BANNER_ERROR
        })
    }
}