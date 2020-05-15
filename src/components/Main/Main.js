import React, {useEffect, useState} from "react"
import s from "./main.module.css"
import {connect} from "react-redux";
import {getImageThunkCreator, openCloseModalPhoto} from "../../actions/actions";
import {ModalPhoto} from "../Modal/photo/ModalPhoto";
import {AddImage} from "../Form/AddImage";


const Main = ({modalPhoto, idModalPhoto, auth, img, openCloseModalPhoto, getImageThunkCreator}) => {
    const [src, setSrc] = useState('')

    const openModalPhoto = (e) => {
        setSrc(e.target.src)
        openCloseModalPhoto(1)
    }


    useEffect(() => {
        getImageThunkCreator()
        console.log(1)
    }, [])
    useEffect(() => {
        console.log(2)
    },[img])


    return (
        <>
            {
                auth
                ? <AddImage getImageThunkCreator={getImageThunkCreator}/>
                : null
            }

            {
                img
                ?   <div className={s.main}>
                        {img.map(photo => <img src={photo.url} key={photo.id} alt={"#"} onClick={openModalPhoto} /> )}
                    </div>
                 : null
            }





            {
                modalPhoto
                ? <ModalPhoto openCloseModalPhoto={openCloseModalPhoto} src={src}/>
                : null
            }
        </>
    )
}

export const MainContainer = connect(state => ({modalPhoto: state.modalReducer.modalPhoto,
    idModalPhoto: state.modalReducer.idModalPhoto,
    auth: state.authReducer.auth,
    img: state.dataReducer.img}), {
    openCloseModalPhoto,
    getImageThunkCreator
})(Main)



