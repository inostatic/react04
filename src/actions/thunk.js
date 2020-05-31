import firebase from "firebase";
import {axiosGet} from "../API/API";
import {authWithEmailAndPassword, createUserWithEmailAndPassword, getUser, outFirebase} from "../API/auth";
import {openCloseModalAuth, renderAfterInputAuth, renderAfterOutputAuth, setImage} from "./actions";
import {transformObjectToArray} from "../functions/transformObjectToArray";



export const thunkCreateUser = (email, password) => {
    return  (dispatch) => {
        createUserWithEmailAndPassword(email, password).then((response) => {
            dispatch(renderAfterInputAuth(response))
        })

    }
}

export const thunkInput = (email, password) => {
    return (dispatch) => {
        authWithEmailAndPassword(email,password).then(response => {
            dispatch(renderAfterInputAuth(response))
            dispatch(openCloseModalAuth())
        })
    }
}

export const thunkOutput = () => {
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




export const getImageThunkCreator = () => {
    return (dispatch) => {
        axiosGet().then(data => {
            dispatch(setImage(transformObjectToArray(data)))
        })
    }
}


export const thunkSetProfile = (type, payload) => {
    let user = getUser()
    console.log(user)
    switch (type) {
        case 'dn' : {
            return (dispatch) => {
                user.updateProfile({displayName: payload})
                    .then(response => console.log(response))
                    .catch(err => console.log(err))
            }
        }
        case  'pu' : {
            return (dispatch) => {
                user.updateProfile({photoURL: payload})
                    .then(response => console.log(response))
                    .catch(err => console.log(err))
            }
        }
    }
}