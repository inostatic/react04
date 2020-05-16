import React from "react"
import s from "./profile.module.scss"


export const Profile = () => {

    return (
        <div className={s.profile}>
            <label >Имя: </label>
            <div>
                <input type="text" id={"name"} className={s.input}/>
                <button className={s.button}>Изменить</button>
            </div>
            <label >Фамилия: </label>
            <div>
                <input type="text" id={"surname"} className={s.input}/>
                <button className={s.button}>Изменить</button>
            </div>
            <label >Дата рождения: </label>
            <div>
                <input type="date" id={"middlename"} className={s.input}/>
                <button className={s.button}>Изменить</button>
            </div>
        </div>
    )
}