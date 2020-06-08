import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import {getDate} from "../functions/getDate";


firebase.initializeApp({
    apiKey: "AIzaSyDCSsOs0VlOGEYNktXGOIoa9_wnEJ2j8eM",
    authDomain: "react04-1e54b.firebaseapp.com",
    databaseURL: "https://react04-1e54b.firebaseio.com",
    projectId: "react04-1e54b",
    storageBucket: "react04-1e54b.appspot.com",
    messagingSenderId: "970165524884",
    appId: "1:970165524884:web:da7e9e17e10824e48a9781"
});

function emailReplace(email) {
    return email.replace(/\./g, '`')
}

export function authWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => response.user)
        .catch(error => alert(error.message))
}

export const createUserWithEmailAndPassword = (email, password) => {
    return  firebase.auth().createUserWithEmailAndPassword(email, password).then(r => r.user)
}


export const outFirebase = () => {
    firebase.auth().signOut().then().catch(e => console.log(e));
}


export const getUser = () => {
    return firebase.auth().currentUser
}


export const addPhoto = async (photoURL, email) => {
    firebase.database().ref(`photos`).push({
        email, photoURL,
        date: getDate()
    }).catch(e => console.log('addPhoto Error:', e))
}


export const addUser = (email, displayName = '', AuthorPhotoURL = '') => {
    firebase.database().ref('users/' + emailReplace(email)).set({
      displayName, AuthorPhotoURL
    }).catch(e => console.log('addUser Error:', e))
}

export const getPhotos = () => {
    return firebase.database().ref('photos').once('value').then(r => r.val())

}

export const getAuthor = () => {
    return firebase.database().ref('users').once('value').then(r => r.val())

}

export const changeDisplayName = (email, displayName) => {
    firebase.database().ref('users/' + emailReplace(email)).update({displayName}).catch((e => console.log(e)))
}

export const changePhotoUrl = (email, AuthorPhotoURL) => {
    firebase.database().ref('users/' + emailReplace(email)).update({AuthorPhotoURL}).catch((e => console.log(e)))
}

