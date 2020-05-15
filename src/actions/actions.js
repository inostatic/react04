import {INPUT_AUTH, OPEN_CLOSE_MODAL_AUTH, OPEN_CLOSE_MODAL_PHOTO, OUTPUT_AUTH, SET_DATA} from "../constants/const";
import {axiosGet} from "../API/API";

export const renderAfterInputAuth = (token) => ({type: INPUT_AUTH, token: token})
export const renderAfterOutputAuth = (token) => ({type: OUTPUT_AUTH, token: token})
export const openCloseModalAuth = () => ({type: OPEN_CLOSE_MODAL_AUTH})
export const openCloseModalPhoto = (id) => ({type: OPEN_CLOSE_MODAL_PHOTO, id: id})


function insertKeyInObj(data) {
    for (let key in data) {
        data[key].id = key
    }
    return Object.values(data)
}



const setImage = (data) => ({type: SET_DATA, payload: data})
export const getImageThunkCreator = () => {
    return (dispatch) => {
        axiosGet().then(data => {
                dispatch(setImage(insertKeyInObj(data)))
        })
    }
}