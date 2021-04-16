import { 
    GET_ACTIVITIES,
    GET_ACTIVITIES_ERROR, 
    SEND_ACTIVITY, 
    SEND_ACTIVITY_ERROR,
    DELETE_ACTIVITY,
    DELETE_ACTIVITY_ERROR,
    UPDATE_ACTIVITY,
    UPDATE_ACTIVITY_ERROR
} from './types'
import axios from 'axios'

const root = 'http://192.168.157.27/api'

const token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

export const sendActivity = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/activity/save`, data, config);
        dispatch({
            type: SEND_ACTIVITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SEND_ACTIVITY_ERROR
        })
    }
}

export const getActivities = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/activity/list`);
        dispatch({
            type: GET_ACTIVITIES,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ACTIVITIES_ERROR
        })
    }
}

export const updateActivity = (data) => async dispatch => {
    try {
        const res = await axios.put(`${root}/activity/update`,data);
        dispatch({
            type: UPDATE_ACTIVITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_ACTIVITY_ERROR
        })
    }
}

export const deleteActivity = (id) => async dispatch => {
    try {
        const res = await axios.put(`${root}/activity/delete`, id ,config);
        dispatch({
            type: DELETE_ACTIVITY,
            payload: Number(res.data.data.activity_id)
        })
    } catch (error) {
        dispatch({
            type: DELETE_ACTIVITY_ERROR
        })
    }
}