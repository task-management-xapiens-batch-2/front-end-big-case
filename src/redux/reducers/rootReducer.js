import {combineReducers as combiner} from 'redux'
import loginReducer from './loginReducer'
import spvReducer from './spvReducer'

export default combiner({
    login: loginReducer,
    spv: spvReducer,
})