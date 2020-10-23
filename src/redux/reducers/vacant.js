import { GET_VACANT } from '../actions/types'

const initialState = {
    vacants: []
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_VACANT:
            return {
                vacants: payload
            }
        default:
            return state;
    }
}