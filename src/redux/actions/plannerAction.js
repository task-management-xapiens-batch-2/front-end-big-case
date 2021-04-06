import {PLANNER_CREATE_PROJECT} from './actionTypes'

export const createNewProject = (newProjectInput) => {
    return {
        type: PLANNER_CREATE_PROJECT,
        payload: newProjectInput
    }
}