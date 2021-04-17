import { 
    GET_COMMUNITIES,
    GET_COMMUNITIES_ERROR, 
    SEND_COMMUNITY, 
    SEND_COMMUNITY_ERROR,
    DELETE_COMMUNITY,
    DELETE_COMMUNITY_ERROR,
    UPDATE_COMMUNITY,
    UPDATE_COMMUNITY_ERROR
} from './types'
import axios from 'axios'

const root = 'https://www.wspamolsa.com.pe/api'

const token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendCommunity = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/community/save`, data, config);
        dispatch({
            type: SEND_COMMUNITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_COMMUNITY_ERROR
        })
    }
}

export const getCommunities = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/community/list`);
        dispatch({
            type: GET_COMMUNITIES,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_COMMUNITIES_ERROR
        })
    }
}

export const updateCommunity = (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/community/update`,data, config);
        dispatch({
            type: UPDATE_COMMUNITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_COMMUNITY_ERROR
        })
    }
}

export const deleteCommunity = (id) => async dispatch => {
    try {
        const res = await axios.put(`${root}/community/delete`, id ,config);
        dispatch({
            type: DELETE_COMMUNITY,
            payload: Number(res.data.data.community_id)
        })
    } catch (error) {
        dispatch({
            type: DELETE_COMMUNITY_ERROR
        })
    }
}