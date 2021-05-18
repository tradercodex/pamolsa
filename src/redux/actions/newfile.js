import { SEND_NEW_FILE, SEND_NEW_FILE_ERROR } from './types'
import axios from 'axios'

const root = 'https://pamolsa-back.herokuapp.com/api'

const token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendNewFile = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/public/file/save`, data, config);
        dispatch({
            type: SEND_NEW_FILE,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SEND_NEW_FILE_ERROR
        })
    }
}