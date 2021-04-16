import { GET_COUNTRY, GET_CITY } from '../actions/types'

const initialState = {
    countries: [],
    cities: []
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: payload
            }
        case GET_CITY:
            return {
                ...state,
                cities: payload
            }
        default:
            return state;
    }
}