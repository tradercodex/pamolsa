import { SEND_NEW_FILE } from '../actions/types'

const initialState = {
    newfile: ""
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case SEND_NEW_FILE:
            return {
                ...state,
                newfile: payload
            }
        default:
            return state;
    }
}