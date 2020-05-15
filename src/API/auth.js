import axios from "axios";

export function authWithEmailAndPassword(email, password) {
    const API_KEY = "AIzaSyDCSsOs0VlOGEYNktXGOIoa9_wnEJ2j8eM"
    if (!email || !password) {
        return Promise.resolve(null)

    }
    return axios({
        method: "POST",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        data: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.data)
        .then(data => data.idToken)

}




















// const renderAfterAuth = (content) => {
//     return content
// }




// export function authWithEmailAndPassword(email, password) {
//     const API_KEY = "AIzaSyDCSsOs0VlOGEYNktXGOIoa9_wnEJ2j8eM"
//     return  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
//         method: "POST",
//         body: JSON.stringify( {
//             email, password,
//             returnSecureToken: true
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(response => response.json())
//         .then(data =>console.log(data))
//         .catch(() => console.log('error'))
// }
