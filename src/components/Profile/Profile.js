import React, {useEffect, useState} from "react"
import s from "./profile.module.scss"
import {connect} from "react-redux";
import {thunkFullProfile} from "../../reducers/profileReducer";


const Profile = ({displayName, photoURL, phoneNumber, thunkFullProfile}) => {
    let [dispName, setDispName] = useState('')
    let [phURL, setPhUrl] = useState(photoURL)
    let [phNum, setPhNum] = useState(phoneNumber)



    useEffect(() => {
        thunkFullProfile()
        setDispName(displayName)
    },[])

    return (
        <div className={s.profile}>
            <label >ФИО: </label>
            <div>
                <input type="text" className={s.input} value={dispName ? dispName : displayName || ''}
                       onChange={(e) => setDispName(e.target.value)}/>
                <button className={s.button}>Изменить</button>
            </div>
            <label >Аватар пользователя: </label>
            <div>
                <input type="text" className={s.input} value={phURL ? phURL : '' }
                       onChange={(e) => setPhUrl(e.target.value)}/>
                <button className={s.button}>Изменить</button>
            </div>
            <label >Номер телефона: </label>
            <div>
                <input type="text" className={s.input} value={phNum ? phNum : '' }
                onChange={(e) => setPhNum(e.target.value)} />
                <button className={s.button}>Изменить</button>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        displayName: state.profileReducer.displayName,
        photoURL: state.profileReducer.photoURL,
        phoneNumber: state.profileReducer.phoneNumber
    }
}


export const ProfileContainer = connect(mapStateToProps, {
    thunkFullProfile
})(Profile)
