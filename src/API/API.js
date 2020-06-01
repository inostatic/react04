import axios from "axios";


export const addPhoto = (url, email) => {
    let item = {
        url, date: new Date().toJSON(), email
    }
   return axios.post(`https://react04-1e54b.firebaseio.com/photos.json`, item)

}

export const addUser = (email, displayName = null, photoURL = null) => {
    let user = {
        email, displayName, photoURL
    }
    return axios.post(`https://react04-1e54b.firebaseio.com/users.json`, user)
}

export const getPhotos = () => {
    return axios.get(`https://react04-1e54b.firebaseio.com/photos.json`)
        .then(response => response.data)
}

export const axiosAuthorData = (email) => {
    return axios.get(`https://react04-1e54b.firebaseio.com/profile.json`)
        .then(response => response.data)
}