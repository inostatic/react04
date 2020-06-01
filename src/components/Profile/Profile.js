import React, {useEffect, useState} from "react"
import s from "./profile.module.scss"
import {connect} from "react-redux"
import {setProfile} from "../../actions/thunk"


const Profile = ({displayName, photoURL, setProfile}) => {
    let [dispName, setDispName] = useState(null)
    let [phURL, setPhUrl] = useState(null)


    const updateProfile = (type) => {
        switch (type) {
            case 'dn':
                if (dispName) setProfile(type, dispName)
            break
            case 'pu':
                if (phURL) setProfile(type, phURL)
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
                <button className={s.button}  onClick={() => updateProfile('dn')}>Изменить</button>
            </div>
            <label >Аватар пользователя: </label>
            <div>
                <input type="text" className={s.input} value={phURL != null ? phURL : photoURL || '' }
                       onChange={(e) => setPhUrl(e.target.value)}/>
                <button className={s.button}  onClick={() => updateProfile('pu')}>Изменить</button>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        displayName: state.authReducer.displayName,
        photoURL: state.authReducer.photoURL
    }
}


export const ProfileContainer = connect(mapStateToProps, {
    setProfile
})(Profile)
