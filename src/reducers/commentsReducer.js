import {SET_COMMENT, SET_COMMENTS} from "../constants/const";

let initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    if (action.type === SET_COMMENTS) {
        return {
            ...state,
            comments: action.payload ? action.payload : []
        }
    } else if (action.type === SET_COMMENT) {
        return {
            ...state,
            comments: [state.comments, action.payload]
        }
    }
    return state
}