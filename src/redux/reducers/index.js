import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";

export const rootReducers = combineReducers(taskReducer);
