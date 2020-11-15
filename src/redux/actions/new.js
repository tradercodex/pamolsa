import { 
    SEND_NEW, 
    SEND_NEW_ERROR,
    GET_NEW,
    GET_NEW_ERROR,
    GET_NEW_ID,
    GET_NEW_ID_ERROR,
    UPDATE_NEW,
    UPDATE_NEW_ERROR,
    DELETE_NEW,
    DELETE_NEW_ERROR,
    GET_NEW_HOME,
    GET_NEW_HOME_ERROR,
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
        const res = await axios.get(`${root}/news/listByDate`);
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

export const getNewsHome = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/news/list`);
        console.log(res.data)
        dispatch({
            type: GET_NEW_HOME,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_NEW_HOME_ERROR
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

export const updateNew= (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/news/update`,data);
        console.log(res.data)
        dispatch({
            type: UPDATE_NEW,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_NEW_ERROR
        })
    }
}

export const deleteNew = (id) => async dispatch => {
    try {
        const res = await axios.put(`${root}/news/delete`, id);
        console.log(res.data)
        dispatch({
            type: DELETE_NEW,
            payload: Number(res.data.data.news_id)
        })
    } catch (error) {
        dispatch({
            type: DELETE_NEW_ERROR
        })
    }
}