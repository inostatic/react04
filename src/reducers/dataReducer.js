import {SET_DATA} from "../constants/const";

let initState = {
    images: []
}

export const dataReducer = (state = initState, action) => {
        if(action.type === SET_DATA) {
            return {
                ...state,
                images: action.payload
            }
        }
        return state
}
