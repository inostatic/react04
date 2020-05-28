import {SET_DISPLAY_NAME, SET_FULL_PROFILE, SET_PHONE_NUMBER, SET_PHOTO_URL} from "../constants/const";
import firebase from "firebase";
import {setProfile} from "../actions/actions";


let initialState = {
    displayName: null,
    photoURL: null,
    phoneNumber: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FULL_PROFILE: {
            return {
                ...state,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                phoneNumber: action.payload.phoneNumber
            }
        }
        case SET_DISPLAY_NAME: {
            return {
                ...state,
                displayName: action.payload
            }
        }
        case SET_PHOTO_URL: {
            return {
                ...state,
                photoURL: action.payload
            }
        }
        case SET_PHONE_NUMBER: {
            return  {
                ...state,
                phoneNumber: action.payload
            }
        }
        default: return state
    }
}

export const thunkFullProfile = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(setProfile({displayName: user.displayName, phoneNumber: user.phoneNumber, photoURL: user.photoURL}))
            }
        });
    }
}