import { SIGNIN_SUCCESS, SIGNIN_ERROR, AUTH_SUCCESS, AUTH_ERROR } from './types'
// import { setAlert } from './alert'
import axios from 'axios'

const root = 'http://3.120.185.254:8090/api'

// export const authMe = () => async dispatch => {

//     let token = localStorage.getItem('ECOMMERCE')

//     const config = {
//         headers: { 
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token
//         }
//     }

//     try {
//         const res = await axios.get('/api/users/me', config)
//         console.log(res.data)
//         dispatch({
//             type: AUTH_SUCCESS,
//             payload: res.data
//         })
//     } catch (error) {
//         dispatch({
//             type: AUTH_ERROR,
//         })
//     }
// }
 
export const signin = (data) => async dispatch => {
    try {
        const res = await axios.post(`${root}/auth/signin`,data);
        console.log(res.data.data)
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: res.data.data
        })
        // dispatch(authMe())
    } catch (error) {
        // const errors = error.response.data
        // if(errors) {
        //     dispatch(setAlert(errors,'danger',10000));
        // }
        dispatch({
            type: SIGNIN_ERROR
        })
    }
}