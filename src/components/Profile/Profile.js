import React, {useEffect, useState} from "react"
import s from "./profile.module.scss"
import {connect} from "react-redux"
import {thunkGetFullProfile, thunkSetProfile} from "../../actions/thunk"


const Profile = ({displayName, photoURL, thunkGetFullProfile, thunkSetProfile}) => {
    let [dispName, setDispName] = useState('')
    let [phURL, setPhUrl] = useState('')
    let [phNum, setPhNum] = useState('')

    const updateProfile = (type) => {
        switch (type) {
            case 'dn':
                if (dispName) thunkSetProfile(type, dispName)
            break
            case 'pu':
                if (phURL) thunkSetProfile(type, phURL)
            break
            case 'pn' : if (phNum) thunkSetProfile(type, phNum)
        }
    }
    // useEffect(() => {
    //     thunkGetFullProfile()
    //     setDispName(displayName)
    // },[])

    return (
        <div className={s.profile}>
            <label >ФИО: </label>
            <div>
                <input type="text" className={s.input}
                       value={dispName ? dispName : displayName || ''}
                       onChange={(e) => setDispName(e.target.value)}
                />
                <button className={s.button}  onClick={() => updateProfile('dn')}>Изменить</button>
            </div>
            <label >Аватар пользователя: </label>
            <div>
                <input type="text" className={s.input} value={phURL ? phURL : photoURL || '' }
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
    thunkSetProfile
})(Profile)
