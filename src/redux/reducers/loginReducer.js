import {GET_USER_LOGIN, GET_USER_LOGIN_DATA, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS} from '../actions/actionTypes'

const initialState = {
    errorMsg: "",
    role: localStorage.getItem("role"),
    success: false
}

const loginReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case LOGIN_REQUEST:
            return state
        case LOGIN_SUCCESS:
            window.location.reload()
            return {
                ...state,
                data: payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                errorMsg: payload
            }
        case GET_USER_LOGIN_DATA:
            return {
                ...state,
                success: payload
            }
        default:
            return state
    }
}

export default loginReducer