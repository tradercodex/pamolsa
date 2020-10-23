import { 
    SEND_NEW, 
    SEND_NEW_ERROR,
    GET_NEW,
    GET_NEW_ERROR,
    GET_NEW_ID,
    GET_NEW_ID_ERROR
} from './types'

import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'

export const sendNew = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/news/save`, data);
        console.log(res.data)
        dispatch({
            type: SEND_NEW,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_NEW_ERROR
        })
    }
}

export const getNews = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/news/list`);
        console.log(res.data)
        dispatch({
            type: GET_NEW,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_NEW_ERROR
        })
    }
}

export const getNewId = id => async dispatch => {
    try {
        const res = await axios.get(`${root}/news/findById/${id}`)
        console.log(res.data)
        dispatch({
            type: GET_NEW_ID,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_NEW_ID_ERROR
        })
    }
}