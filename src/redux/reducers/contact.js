import {  } from '../actions/types'

const initialState = {
    contact: []
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        default:
            return state;
    }
}