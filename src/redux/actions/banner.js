import { SEND_BANNER, SEND_BANNER_ERROR, GET_BANNER, GET_BANNER_ERROR } from './types'
import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'

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

export const getBanners = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/home/listImage`);
        console.log(res.data)
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