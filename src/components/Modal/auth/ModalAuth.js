import React, {useState} from "react"
import s from './modalAuth.module.scss'



export const ModalAuth = ({modalAuth ,openCloseModalAuth, createUser, signIn}) => {
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')

    const sendForm = () => {
        if(email && pass) {
            signIn(email, pass)
            setPass('')
            setEmail('')
        }
    }
    const reg = () => {
        if(email && pass) {
            createUser(email, pass)
        }
    }

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
