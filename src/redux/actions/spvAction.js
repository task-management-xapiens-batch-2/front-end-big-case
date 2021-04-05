import {SPV_DATA_REQUEST} from './actionTypes'

export const setUserData = (findAllUserAdmin) => {
    return {
        type: SPV_DATA_REQUEST,
        payload: findAllUserAdmin
    }
}