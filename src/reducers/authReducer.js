import {
    INPUT_AUTH,
    OUTPUT_AUTH,
    SET_DISPLAY_NAME,
    SET_PHOTO_URL
} from "../constants/const";


let initialState = {
    token: false,
    auth: false,
    displayName: null,
    photoURL: null,
    email: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_AUTH:
            if (action.payload) {
                return {
                    ...state,
                    token: action.payload.uid,
                    auth: true,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL,
                    email: action.payload.email,
                }
            }
            return state
        case OUTPUT_AUTH:
            return {
                ...state,
                token: false,
                auth: false,
                displayName: null,
                photoURL: null,
                email: null
            }
        case SET_DISPLAY_NAME:
            return {
                ...state,
                displayName: action.payload
            }
        case SET_PHOTO_URL:
            return {
                ...state,
                photoURL: action.payload
            }
        default: return state
    }
}

