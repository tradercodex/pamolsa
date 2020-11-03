import { GET_BANNER , DELETE_BANNER, SEND_BANNER} from '../actions/types'

const initialState = {
    banners: []
}

export default function (state = initialState, action) {

    const { type, payload } = action
    console.log(payload)
    console.log(state)
    switch (type) {
        case GET_BANNER:
            return {
                ...state,
                banners: payload
            }
        // case SEND_BANNER: 
        //     return {
        //         ...state,
        //         banners: [...state.banners, payload]
        //     }
        case DELETE_BANNER: 
            return {
                ...state,
                banners: state.banners.filter(banner => banner.id !== payload)
            }
        default:
            return state;
    }
}