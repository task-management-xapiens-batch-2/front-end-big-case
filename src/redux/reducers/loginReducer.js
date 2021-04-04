import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS} from '../actions/actionTypes'

const initialState = {
    email: "",
    password: ""
}

const loginReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case LOGIN_REQUEST:
            return state
        case LOGIN_SUCCESS:
            return {
                data: payload
            }
        case LOGIN_FAILED:
            return {
                errorMsg: payload
            }
        default:
            return state
    }
}

export default loginReducer