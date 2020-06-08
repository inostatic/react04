import firebase from "firebase/app";
import 'firebase/auth'

import {
    addComment,
    addUser,
    changeDisplayName,
    changePhotoUrl,
    getAuthor,
    getCommentAuthor,
    getComments,
    getPhotos
} from "../API/API";
import {authWithEmailAndPassword, createUserWithEmailAndPassword, getUser, outFirebase} from "../API/API";
import {
    openCloseModalAuth,
    renderAfterInputAuth,
    renderAfterOutputAuth, setComment, setComments,
    setDisplayName,
    setImage,
    setPhotoURL
} from "./actions";
import {transformObjectToArray} from "../functions/transformObjectToArray";
import {SET_DISPLAY_NAME, SET_PHOTO_URL} from "../constants/const";
import {pushAuthorData} from "../functions/pushAuthorData";
import {getDate} from "../functions/getDate";



export const createUser = (email, password) => {
    return  (dispatch) => {
        createUserWithEmailAndPassword(email, password).then(data => {
            addUser(email)
            dispatch(renderAfterInputAuth(data))
            dispatch(openCloseModalAuth())
        })
    }
}

export const signIn = (email, password) => {
    return (dispatch) => {
        authWithEmailAndPassword(email,password).then(response => {
            dispatch(renderAfterInputAuth(response))
            dispatch(openCloseModalAuth())
        })
    }
}

export const signOut = () => {
    return  (dispatch) => {
        outFirebase()
        dispatch(renderAfterOutputAuth())
    }
}


export const checkAuth = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(renderAfterInputAuth(user))
            }})
    }
}

export const addCommentFirebase = (email, comment, comment_id) => {
    return (dispatch) => {
        getCommentAuthor(email).then(data => {
            let date = getDate()
            let displayName = data.displayName
            addComment(comment, email, displayName, date, comment_id).catch(e => console.log(e))
            dispatch(setComment({comment, email, date, displayName, comment_id}))
        })
    }
}


export const getArrData = () => {
    return (dispatch) => {
        getPhotos().then(data => {
            getAuthor().then(users => {
                dispatch(setImage(pushAuthorData(transformObjectToArray(data), users)))
            })
        })
    }
}

export const getArrComments = () => {
    return (dispatch) => {
        getComments().then(data => {
            dispatch(setComments(transformObjectToArray(data)))
        })
    }
}

export const setProfile = (type, payload) => {
    let user = getUser()
    switch (type) {
        case SET_DISPLAY_NAME : {
            return (dispatch) => {
                user.updateProfile({displayName: payload.dispName})
                    .then(() => {
                        changeDisplayName(payload.email, payload.dispName)
                        dispatch(setDisplayName(payload.dispName))
                    })
                    .catch(err => console.log(err))
            }
        }
        case  SET_PHOTO_URL : {
            return (dispatch) => {
                user.updateProfile({photoURL: payload.phURL})
                    .then(() => {
                        changePhotoUrl(payload.email, payload.phURL)
                        dispatch(setPhotoURL(payload.phURL))
                    })
                    .catch(err => console.log(err))
            }
        }
    }
}