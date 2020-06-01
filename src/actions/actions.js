import {
    INPUT_AUTH,
    OPEN_CLOSE_MODAL_AUTH,
    OPEN_CLOSE_MODAL_PHOTO,
    OUTPUT_AUTH,
    SET_DATA, SET_DISPLAY_NAME, SET_PHOTO_URL,
} from "../constants/const";


export const renderAfterInputAuth = (payload) => ({type: INPUT_AUTH, payload})
export const renderAfterOutputAuth = () => ({type: OUTPUT_AUTH, token: null})
export const openCloseModalAuth = () => ({type: OPEN_CLOSE_MODAL_AUTH})
export const openCloseModalPhoto = () => ({type: OPEN_CLOSE_MODAL_PHOTO})
export const setImage = (data) => ({type: SET_DATA, payload: data})
export const setDisplayName = (DisplayName) => ({type: SET_DISPLAY_NAME, payload: DisplayName})
export const setPhotoURL = (url) => ({type: SET_PHOTO_URL, payload: url})



