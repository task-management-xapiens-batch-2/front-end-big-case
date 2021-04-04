import {combineReducers as combiner} from 'redux'
import loginReducer from '../reducers/loginReducer'

export default combiner({
    login: loginReducer
})