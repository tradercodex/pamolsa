import { DELETE_COMMUNITY, GET_COMMUNITIES } from '../actions/types'

const initialState = {
    communities: []
}

export default function (state = initialState, action) {

    const { type, payload } = action
    console.log(payload)
    console.log(state)
    switch (type) {
        case GET_COMMUNITIES:
            return {
                ...state,
                communities: payload
            }
        case DELETE_COMMUNITY: 
            return {
                ...state,
                communities: state.communities.filter(community => community.id !== payload)
            }
        default:
            return state;
    }
}