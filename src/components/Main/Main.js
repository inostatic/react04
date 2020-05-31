import React, {useEffect, useState} from "react"
import s from "./main.module.scss"
import {connect} from "react-redux";
import {openCloseModalPhoto} from "../../actions/actions";
import {ModalPhoto} from "../Modal/photo/ModalPhoto";
import {AddImage} from "../Form/AddImage";
import {getImageThunkCreator} from "../../actions/thunk";



const Main = ({modalPhoto, auth, images, username, userPhoto, openCloseModalPhoto, getImageThunkCreator}) => {
    const [photoId, setPhotoId] = useState('')
    const [src, setSrc] = useState('')
    let email = 'e'

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
                ? <AddImage getImageThunkCreator={getImageThunkCreator}
                email={email}
                />
                : null}
            {images
                ? <div className={s.main}>
                    {images.map(photo => <div onClick={openModalPhoto} key={photo.key}
                                           className={s.block_img}><img src={photo.url} id={photo.id} alt={"#"}
                    /></div>)}
                </div>
                : null}
            {modalPhoto
                ? <ModalPhoto openCloseModalPhoto={openCloseModalPhoto}
                              src={src}
                              photoId={photoId}
                              images={images}
                              username={username}
                              userPhoto={userPhoto}
                />
                : null}
        </>
    )
}



let mapStateToProps = (state) => {
    return {
        modalPhoto: state.modalReducer.modalPhoto,
        auth: state.authReducer.auth,
        images: state.dataReducer.images,
        username: state.authReducer.displayName,
        userPhoto: state.authReducer.photoURL
    }
}


export const MainContainer = connect(mapStateToProps, {
    openCloseModalPhoto,
    getImageThunkCreator
})(Main)



