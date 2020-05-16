import {OPEN_CLOSE_MODAL_AUTH, OPEN_CLOSE_MODAL_PHOTO} from "../constants/const";

let initState = {
    modalAuth: false,
    modalPhoto: false,
}

export const modalReducer = (state = initState, action) => {
    if (action.type === OPEN_CLOSE_MODAL_AUTH) {
        return {
            ...state,
            modalAuth: !state.modalAuth
        }
    }  else if (action.type === OPEN_CLOSE_MODAL_PHOTO) {
        return {
            ...state,
            modalPhoto: !state.modalPhoto
        }
    }
    return state
}