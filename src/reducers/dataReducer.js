import {SET_DATA} from "../constants/const";
import {axiosGet} from "../API/API";
import {transformObjectToArray} from "../modules/transformObjectToArray";
import {setImage} from "../actions/actions";

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


export const getImageThunkCreator = () => {
    return (dispatch) => {
        axiosGet().then(data => {
            dispatch(setImage(transformObjectToArray(data)))
        })
    }
}