import {INPUT_AUTH, OPEN_CLOSE_MODAL_AUTH, OPEN_CLOSE_MODAL_PHOTO, OUTPUT_AUTH, SET_DATA} from "../constants/const";


export const renderAfterInputAuth = (token) => ({type: INPUT_AUTH, token: token})
export const renderAfterOutputAuth = () => ({type: OUTPUT_AUTH, token: null})
export const openCloseModalAuth = () => ({type: OPEN_CLOSE_MODAL_AUTH})
export const openCloseModalPhoto = () => ({type: OPEN_CLOSE_MODAL_PHOTO})
export const setImage = (data) => ({type: SET_DATA, payload: data})


