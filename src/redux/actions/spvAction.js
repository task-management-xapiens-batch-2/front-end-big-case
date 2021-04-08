import {SPV_DATA_REQUEST, SPV_CREATE_USER} from './actionTypes'

export const setUserData = (findAllUserAdmin) => {
    return {
        type: SPV_DATA_REQUEST,
        payload: findAllUserAdmin
    }
}

export const createNewUser = (newUserInput) => {
    return {
        type: SPV_CREATE_USER,
        payload: newUserInput
    }
}