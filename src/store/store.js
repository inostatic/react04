import {combineReducers} from "redux";
import {authReducer} from "../reducers/authReducer";
import {modalReducer} from "../reducers/modalReducer";
import {dataReducer} from "../reducers/dataReducer";
import {profileReducer} from "../reducers/profileReducer";


export const reducers = combineReducers( {
    authReducer,
    modalReducer,
    dataReducer,
    profileReducer
})



