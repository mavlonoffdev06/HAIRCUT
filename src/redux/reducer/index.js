import { combineReducers } from "redux";
import { langReducer } from "./langReducer";

const rootReducer = combineReducers({
    language: langReducer,
})

export {rootReducer}