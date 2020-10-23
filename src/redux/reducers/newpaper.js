import { GET_NEWSPAPER } from '../actions/types'

const initialState = {
    newspaper: []
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case GET_NEWSPAPER:
            return {
                newspaper: payload
            }
        default:
            return state;
    }
}