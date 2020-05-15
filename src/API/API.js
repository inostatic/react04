import axios from "axios";

const GET_IMG = "GET_IMG"
const ADD_IMG = "ADD_IMG"
const REMOVE_IMG = "REMOVE_IMG"


export const axiosPost = (url) => {
    const note = {
        url, date: new Date().toJSON()
    }
   return axios.post(`https://react04-1e54b.firebaseio.com/notes.json`, note)

}

export const axiosGet = () => {
    return axios.get(`https://react04-1e54b.firebaseio.com/notes.json`)
        .then(response => response.data)
}