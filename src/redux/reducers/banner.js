import { GET_BANNER } from '../actions/types'

const initialState = {
    banners: [
        {
            id: '',
            circle: {
                url: ''
            },
            file: {
                url: ''
            },
            name: '',
            subtitle: '',
        }
    ]
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_BANNER:
            return {
                banners: payload
            }
        default:
            return state;
    }
}