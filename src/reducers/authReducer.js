import {INPUT_AUTH, OUTPUT_AUTH} from "../constants/const";
import {authWithEmailAndPassword, createUserWithEmailAndPassword, outFirebase} from "../API/auth";
import {openCloseModalAuth, renderAfterInputAuth, renderAfterOutputAuth, setProfile} from "../actions/actions";
import firebase from "firebase";


let initialState = {
    token: false,
    auth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_AUTH: {
            if (action.token) {
                return {
                    ...state,
                    token: action.token,
                    auth: !state.auth
                }
            }
            return state

        }
        case OUTPUT_AUTH: {
            return {
                ...state,
                token: false,
                auth: false
            }
        }
        default: return state
    }
}


export const thunkCreateUser = (email, password) => {
    return  (dispatch) => {
        createUserWithEmailAndPassword(email, password).then((response) => {
            dispatch(renderAfterInputAuth(response))
        })

    }
}

export const thunkInput = (email, password) => {
    return (dispatch) => {
        authWithEmailAndPassword(email,password).then(response => {
            dispatch(renderAfterInputAuth(response))
            dispatch(openCloseModalAuth())
        })

    }
}

export const thunkOutput = () => {
    return  (dispatch) => {
        outFirebase()
        dispatch(renderAfterOutputAuth())
    }
}


export const checkAuth = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(renderAfterInputAuth(user.uid))
            } else {
                // No user is signed in.
                console.log('не авторизирован')
            }
        })
    }
}
