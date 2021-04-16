import { SIGNIN_SUCCESS, SIGNIN_ERROR, AUTH_SUCCESS, AUTH_ERROR } from './types'
// import { setAlert } from './alert'
import axios from 'axios'

const root = 'http://192.168.157.27/api'
 
export const signin = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/auth/signin`,data);
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SIGNIN_ERROR
        })
    }
}