import {SET_DATA} from "../constants/const";

let initState = {
    img: []
}

export const dataReducer = (state = initState, action) => {
        if(action.type === SET_DATA) {
            return {
                ...state,
                img: action.payload
            }
        }
        return state
}
