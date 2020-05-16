import {INPUT_AUTH, OPEN_CLOSE_MODAL_AUTH, OPEN_CLOSE_MODAL_PHOTO, OUTPUT_AUTH, SET_DATA} from "../constants/const";
import {axiosGet} from "../API/API";
import {transformObjectToArray} from "../modules/transformObjectToArray";

export const renderAfterInputAuth = (token) => ({type: INPUT_AUTH, token: token})
export const renderAfterOutputAuth = (token) => ({type: OUTPUT_AUTH, token: token})
export const openCloseModalAuth = () => ({type: OPEN_CLOSE_MODAL_AUTH})
export const openCloseModalPhoto = () => ({type: OPEN_CLOSE_MODAL_PHOTO})





const setImage = (data) => ({type: SET_DATA, payload: data})
export const getImageThunkCreator = () => {
    return (dispatch) => {
        axiosGet().then(data => {
                dispatch(setImage(transformObjectToArray(data)))
        })
    }
}