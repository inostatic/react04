import React, {useEffect, useState} from "react"
import s from './modalAuth.module.scss'



export const ModalAuth = ({modalAuth ,openCloseModalAuth, thunkCreateUser, thunkInput}) => {
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    let [form, setForm] = useState(false)

    const sendForm = () => {
        if(email && pass) {
            setForm(!form)
        }
    }
    const reg = () => {
        if(email && pass) {
            thunkCreateUser(email, pass)
        }
    }
    useEffect(() => {
        if(form) {
            thunkInput(email, pass)
            setPass('')
            setEmail('')
        }

    },[form])

    const closeModalAuth = (event) => {
        if(event.target.dataset.close === "true") {
            openCloseModalAuth()
        }
    }

    return (
        <>
            {
                !modalAuth
                    ? null
                    : <div className={s.modal_overlay} data-close={"true"} onClick={closeModalAuth} >
                        <div className={s.modal}>
                            <div className={s.form}>
                                <label>Логин:</label>
                                <input type="text" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                                <label>Пароль:</label>
                                <input type="password" onChange={(e) => {setPass(e.target.value)}} value={pass}/>
                                <div className={s.btn_reg}>
                                    <button onClick={sendForm}>Войти</button>
                                    <button onClick={reg}>Регистрация</button>
                                </div>
                            </div>
                        </div>
                        <div className={s.x} data-close={"true"}>&times;</div>
                    </div>
            }
        </>
    )
}
