import { GET_VACANT, GET_VACANT_ERROR } from './types'
import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'


export const getVacants = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/vacant/listVacant`);
        console.log(res.data)
        dispatch({
            type: GET_VACANT,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_VACANT_ERROR
        })
    }
}