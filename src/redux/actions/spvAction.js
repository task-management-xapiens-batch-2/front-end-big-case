import {SPV_CREATE_USER, SPV_UPDATE_USER, SPV_DELETE_USER, SPV_DATA_REQUEST, SPV_DATA_FAILED, SPV_DATA_SUCCESS} from './actionTypes'
// import { useMutation, useQuery } from "@apollo/client";

// export const getDataSpv = (userInput) => {
//     return(dispatch) => {
//         dispatch(setDataUser())
//         const {loading, refetch, data} = useQuery(userInput)
//         if (loading) return <div>Loading...</div>
//         console.log(data)
//     }
// }

export const setUserData = (findAllUserAdmin) => {
    return {
        type: SPV_DATA_REQUEST,
        payload: findAllUserAdmin
    }
}