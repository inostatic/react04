import {combineReducers} from "redux";
import {authReducer} from "../reducers/authReducer";
import {modalReducer} from "../reducers/modalReducer";
import {dataReducer} from "../reducers/dataReducer";
import {commentsReducer} from "../reducers/commentsReducer";


export const reducers = combineReducers( {
    authReducer,
    modalReducer,
    dataReducer,
    commentsReducer
})



