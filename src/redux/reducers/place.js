import { GET_COUNTRY, GET_CITY, GET_DEPARTMENT, GET_PROVINCE, GET_DISTRICT } from '../actions/types'

const initialState = {
    countries: [],
    cities: [],
    departments: [],
    provinces: [],
    districts: []
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
        case GET_DEPARTMENT:
            return {
                ...state,
                departments: payload
            }
        case GET_PROVINCE:
            return {
                ...state,
                provinces: payload
            }
        case GET_DISTRICT:
            return {
                ...state,
                districts: payload
            }
        default:
            return state;
    }
}