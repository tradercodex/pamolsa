import { SIGNIN_SUCCESS } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token')
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case SIGNIN_SUCCESS:
            localStorage.setItem('token',payload.accessToken)
            return {
                ...state,
                token: payload.accessToken
            }
        default:
            return state;
    }
}