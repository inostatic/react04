import firebase from "firebase";
import {addUser, getPhotos} from "../API/API";
import {authWithEmailAndPassword, createUserWithEmailAndPassword, getUser, outFirebase} from "../API/auth";
import {
    openCloseModalAuth,
    renderAfterInputAuth,
    renderAfterOutputAuth,
    setDisplayName,
    setImage,
    setPhotoURL
} from "./actions";
import {transformObjectToArray} from "../functions/transformObjectToArray";



export const createUser = (email, password) => {
    return  (dispatch) => {
        createUserWithEmailAndPassword(email, password).then((response) => {
            debugger
            // addUser(email).then()
            dispatch(renderAfterInputAuth(response))

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




export const getArrData = () => {
    return (dispatch) => {
        getPhotos().then(data => {
            dispatch(setImage(transformObjectToArray(data)))
        })
    }
}


export const setProfile = (type, payload) => {
    let user = getUser()
    console.log(user)
    switch (type) {
        case 'dn' : {
            return (dispatch) => {
                user.updateProfile({displayName: payload})
                    .then(() => {
                        dispatch(setDisplayName(payload))
                    })
                    .catch(err => console.log(err))
            }
        }
        case  'pu' : {
            return (dispatch) => {
                user.updateProfile({photoURL: payload})
                    .then(() => {
                        dispatch(setPhotoURL(payload))
                    })
                    .catch(err => console.log(err))
            }
        }
    }
}