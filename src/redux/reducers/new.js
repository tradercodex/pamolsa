import { DELETE_NEW, GET_NEW, GET_NEW_HOME, GET_NEW_ID } from '../actions/types'

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
    },
    newsHome: []
}

export default function (state = initialState, action) {

    const { type, payload } = action
    switch (type) {
        case GET_NEW:
            return {
                news: payload
            }
        case GET_NEW_HOME: 
            return {
                newsHome: payload
            }
        case GET_NEW_ID: 
            return {
                ...state,
                new: payload
            }
        case DELETE_NEW: 
            return {
                ...state,
                news: state.news.filter(newDelete => newDelete.id !== payload)
            }
        default:
            return state;
    }
}