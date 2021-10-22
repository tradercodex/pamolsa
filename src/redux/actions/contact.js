import { SEND_CONTACT, SEND_CONTACT_ERROR } from './types'
import axios from 'axios'

const root = 'https://ws.pamolsa.com.pe/api'

export const sendContact = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/contact/save`, data);
        console.log(res.data)
        dispatch({
            type: SEND_CONTACT,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_CONTACT_ERROR
        })
    }
}