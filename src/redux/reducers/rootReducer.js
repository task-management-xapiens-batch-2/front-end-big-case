import {combineReducers as combiner} from 'redux'
import loginReducer from './loginReducer'
import plannerReducer from './plannerReducer'
import spvReducer from './spvReducer'

export default combiner({
    login: loginReducer,
    spv: spvReducer,
    planner: plannerReducer
})