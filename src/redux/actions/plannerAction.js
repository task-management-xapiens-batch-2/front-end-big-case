import {PLANNER_CREATE_PROJECT, PLANNER_CREATE_TASK} from './actionTypes'

export const createNewProject = (newProjectInput) => {
    return {
        type: PLANNER_CREATE_PROJECT,
        payload: newProjectInput
    }
}

export const createNewTask = (newTaskInput) => {
    return {
        type: PLANNER_CREATE_TASK,
        payload: newTaskInput
    }
}

