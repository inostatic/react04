import React, {useEffect, useState} from "react"
import s from "./main.module.scss"
import {connect} from "react-redux";
import {openCloseModalPhoto} from "../../actions/actions";
import {ModalPhoto} from "../Modal/photo/ModalPhoto";
import {AddImage} from "../Form/AddImage";
import {addCommentFirebase, getArrComments, getArrData} from "../../actions/thunk";



const Main = ({modalPhoto, auth, images, email, openCloseModalPhoto, getArrData, getArrComments, comments, addCommentFirebase}) => {
    let [photoId, setPhotoId] = useState('')
    let [src, setSrc] = useState('')
    let [username, setUsername] = useState('')
    let [userPhoto, setUserPhoto] = useState('')
    let [date, setDate] = useState('')
    let [photoKey, SetPhotoKey] = useState('')
    let [photoComment, setPhotoComment] = useState('')

    useEffect(() => {
        getArrComments()
    }, [])

    const openModalPhoto = (e) => {
        let result
        setPhotoId(e.target.id || e.target.firstChild.id)
        setSrc(e.target.src || e.target.firstChild.src)
        setUsername(e.target.dataset.username || e.target.firstChild.dataset.username)
        setUserPhoto(e.target.dataset.userphoto || e.target.firstChild.dataset.userphoto)
        setDate(e.target.dataset.date || e.target.firstChild.dataset.date)
        SetPhotoKey(e.target.dataset.photokey || e.target.firstChild.dataset.photokey)
        let target = e.target.dataset.photokey || e.target.firstChild.dataset.photokey
        if(comments.length > 0) {
            result = comments.filter(item => item.comment_id === target)
        }
        if (result.length === 0) {
            result.push({comment: "no comments", comment_id: "0", date: "", displayName: "", email: ""})
        }
        setPhotoComment(result)
        openCloseModalPhoto()
    }
    useEffect(() => {
        getArrData()
    }, [])



    return (
        <>
            {auth
                ? <AddImage getArrData={getArrData}
                email={email}
                />
                : null}
            {images
                ? <div className={s.main}>
                    {images.map(photo => <div onClick={openModalPhoto} key={photo.key} className={s.block_img}>
                        <img src = {photo.photoURL}
                             id = {photo.id} alt={"#"}
                             data-userphoto = {photo.AuthorPhotoURL}
                             data-username = {photo.displayName}
                             data-date = {photo.date}
                             data-photokey = {photo.key}
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
                              date={date}
                              getArrComments={getArrComments}
                              comments={comments}
                              email={email}
                              addCommentFirebase={addCommentFirebase}
                              photoKey={photoKey}
                              photoComment={photoComment}
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
        userPhoto: state.authReducer.photoURL,
        email: state.authReducer.email,
        comments: state.commentsReducer.comments
    }
}


export const MainContainer = connect(mapStateToProps, {
    openCloseModalPhoto,
    getArrData,
    getArrComments,
    addCommentFirebase
})(Main)



