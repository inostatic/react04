import React, {useEffect, useState} from "react"
import s from "./main.module.scss"
import {connect} from "react-redux";
import {getImageThunkCreator, openCloseModalPhoto} from "../../actions/actions";
import {ModalPhoto} from "../Modal/photo/ModalPhoto";
import {AddImage} from "../Form/AddImage";


const Main = ({modalPhoto, auth, images, openCloseModalPhoto, getImageThunkCreator}) => {
    const [photoId, setPhotoId] = useState('')
    const [src, setSrc] = useState('')

    const openModalPhoto = (e) => {
        setPhotoId(e.target.id || e.target.firstChild.id)
        setSrc(e.target.src || e.target.firstChild.src)
        openCloseModalPhoto()
    }

    useEffect(() => {
        getImageThunkCreator()
    }, [])


    return (
        <>
            {auth
                ? <AddImage getImageThunkCreator={getImageThunkCreator}/>
                : null}
            {images
                ? <div className={s.main}>
                    {images.map(photo => <div onClick={openModalPhoto} key={photo.key}
                                           className={s.block_img}><img src={photo.url} id={photo.id} alt={"#"}
                    /></div>)}
                </div>
                : null}
            {modalPhoto
                ? <ModalPhoto openCloseModalPhoto={openCloseModalPhoto} src={src} photoId={photoId} images={images}/>
                : null}
        </>
    )
}

export const MainContainer = connect(state => ({modalPhoto: state.modalReducer.modalPhoto,
    auth: state.authReducer.auth,
    images: state.dataReducer.images}), {
    openCloseModalPhoto,
    getImageThunkCreator
})(Main)



