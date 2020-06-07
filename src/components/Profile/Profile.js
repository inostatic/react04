import React, {useEffect, useState} from "react"
import s from "./profile.module.scss"
import {connect} from "react-redux"
import {setProfile} from "../../actions/thunk"
import {SET_DISPLAY_NAME, SET_PHOTO_URL} from "../../constants/const";


const Profile = ({displayName, photoURL, email, setProfile}) => {
    let [dispName, setDispName] = useState(null)
    let [phURL, setPhUrl] = useState(null)


    const updateProfile = (type) => {
        switch (type) {
            case SET_DISPLAY_NAME:
                if (dispName) setProfile(type, {dispName, email})
            break
            case SET_PHOTO_URL:
                if (phURL) setProfile(type, {phURL, email})
            break
        }
    }

    return (
        <div className={s.profile}>
            <label >ФИО: </label>
            <div>
                <input type="text" className={s.input}
                       value={dispName != null ? dispName : displayName || ''}
                       onChange={(e) => setDispName(e.target.value)}
                />
                <button className={s.button}  onClick={() => updateProfile(SET_DISPLAY_NAME)}>Изменить</button>
            </div>
            <label >Аватар пользователя: </label>
            <div>
                <input type="text" className={s.input} value={phURL != null ? phURL : photoURL || '' }
                       onChange={(e) => setPhUrl(e.target.value)}/>
                <button className={s.button}  onClick={() => updateProfile(SET_PHOTO_URL)}>Изменить</button>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        displayName: state.authReducer.displayName,
        photoURL: state.authReducer.photoURL,
        email: state.authReducer.email
    }
}


export const ProfileContainer = connect(mapStateToProps, {
    setProfile
})(Profile)
