import React, {useState} from "react"
import s from './AddImage.module.scss'
import {addPhoto} from "../../API/API";

export const AddImage = ({email , getArrData}) => {
    let [url, setUrl] = useState('')

    const add = (e) => {
        e.preventDefault()
        if (url) {
            addPhoto(url, email).then(() => {
                setUrl('')
                getArrData()
            })
            setUrl('')
        }
    }

    return (
        <div className={s.form}>
            <div className={s.block}>
                <input type="text" placeholder={"Поместите ссылку на изображение"} className={s.input} value={url} onChange={(e) => setUrl(e.target.value)}/>
                <button className={s.btn} onClick={add}>Опубликовать</button>
            </div>
        </div>
    )
}

