
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCSsOs0VlOGEYNktXGOIoa9_wnEJ2j8eM",
    authDomain: "react04-1e54b.firebaseapp.com",
    databaseURL: "https://react04-1e54b.firebaseio.com",
    projectId: "react04-1e54b",
    storageBucket: "react04-1e54b.appspot.com",
    messagingSenderId: "970165524884",
    appId: "1:970165524884:web:da7e9e17e10824e48a9781"
};

firebase.initializeApp(firebaseConfig);



export function authWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => response.user.uid)
        .catch(error => console.log(error))
}


export const createUserWithEmailAndPassword = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        console.log(error)
    });
}














