import { GET_NEW, GET_NEW_ID } from '../actions/types'

const initialState = {
    news: [],
    new: {
        id: '',
        title: '',
        body: '',
        place: '',
        author: '',
        source: '',
        file: {
            url: ''
        }
    }
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case GET_NEW:
            return {
                news: payload
            }
        case GET_NEW_ID: 
            return {
                ...state,
                new: payload
            }
        default:
            return state;
    }
}