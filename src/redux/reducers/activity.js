import { DELETE_ACTIVITY, GET_ACTIVITIES } from '../actions/types'

const initialState = {
    activities: []
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case DELETE_ACTIVITY: 
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== payload)
            }
        default:
            return state;
    }
}