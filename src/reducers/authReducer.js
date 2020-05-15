import {INPUT_AUTH, OUTPUT_AUTH} from "../constants/const";


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



