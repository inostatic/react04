import axios from "axios";

// const GET_IMG = "GET_IMG"
// const ADD_IMG = "ADD_IMG"
// const REMOVE_IMG = "REMOVE_IMG"


export const axiosPost = (url, email) => {
    const note = {
        url, date: new Date().toJSON(), email
    }
   return axios.post(`https://react04-1e54b.firebaseio.com/photos.json`, note)

}

export const axiosGet = () => {
    return axios.get(`https://react04-1e54b.firebaseio.com/photos.json`)
        .then(response => response.data)
}

export const axiosAuthorData = (email) => {
    return axios.get(`https://react04-1e54b.firebaseio.com/profile.json`)
        .then(response => response.data)
}