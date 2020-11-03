import { GET_VACANT, DELETE_VACANT,UPDATE_VACANT } from '../actions/types'

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
        // case UPDATE_VACANT:
        //     return {
        //         ...state,
        //         vacants: state.vacants.map(vacant =>
        //             vacant.id === payload ? (vacant = payload) : vacant 
        //         )
        //     }
        case DELETE_VACANT:
            return {
                ...state,
                vacants: state.vacants.filter(vacant => vacant.id !== payload)
            }
        default:
            return state;
    }
}