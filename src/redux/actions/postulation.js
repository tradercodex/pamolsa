import { SEND_POSTULATION, SEND_POSTULATION_ERROR } from './types'
import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'

export const sendPostulation = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/postulation/save`, data);
        dispatch({
            type: SEND_POSTULATION,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_POSTULATION_ERROR
        })
    }
}