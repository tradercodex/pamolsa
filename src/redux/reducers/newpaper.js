import { DELETE_NEWPAPER, GET_NEWSPAPER } from '../actions/types'

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
        case DELETE_NEWPAPER:
            return {
                ...state,
                newspaper: state.newspaper.filter(newpaperDelete => newpaperDelete.id !== payload)
            }
        default:
            return state;
    }
}