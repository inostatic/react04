import React, {useEffect, useState} from "react"
import s from "./modalPhoto.module.scss"

export const ModalPhoto = ({
                               openCloseModalPhoto,
                               src, photoId,
                               images, username,
                               userPhoto, date,
                               getArrComments, comments,
                               email, addCommentFirebase,
                               photoKey, photoComment}) =>
{

    let countImg = images.length - 1
    let [photoDate, setPhotoDate] = useState(date)
    let [userName, setUserName] = useState(username)
    let [userPhotoUrl, setUserPhotoUrl] = useState(userPhoto)
    let [id, setId] = useState(Number(photoId))
    let [comment_id, setComment_id] = useState(photoKey)
    let [photoSrc, setPhotoSrc] = useState(src)
    let [sliders, setSliders] = useState(getSliders())
    let [comment, setComment] = useState('')
    let [displayComment, setDisplayComment] = useState(photoComment)

    useEffect(() => {
        getArrComments()
    }, [])


    function getSliders() {
        if (photoId < countImg - 5) {
            return images.slice(+photoId, +photoId + 6)
        } else if((countImg - 5) < 0){
            return images.slice(0 , countImg + 1)
        } else {
            return images.slice(countImg - 5, countImg + 1)
        }
    }

    const closeModalPhoto = (event) => {
        if(event.target.dataset.close === "true") {
            openCloseModalPhoto()
        }
    }
    const sendComment = (e) => {
        e.preventDefault()
        if(comment) {
            addCommentFirebase(email, comment, comment_id)
            setComment('')
            getArrComments()
        }
    }

    const getImgFromGallery = (e) => {
        setPhotoSrc(e.target.src || e.target.firstChild.src)
        setUserPhotoUrl(e.target.dataset.userphoto || e.target.firstChild.dataset.userphoto)
        setUserName(e.target.dataset.username || e.target.firstChild.dataset.username)
        setPhotoDate(e.target.dataset.date || e.target.firstChild.dataset.date)

    }

    const leftGallery = () => {
        let num = sliders[0].id
        if(num > 0) {
            setSliders(images.slice(num - 1, num + 5))
        }
    }

    const rightGallery = () => {
        let num = sliders[0].id
        if(num < countImg - 5) {
            setSliders(images.slice(num + 1, num + 7))
        }
    }


    const leftSlide = () => {
        if (id === 0) {
            setPhotoSrc(images[countImg].photoURL)
            setPhotoDate(images[countImg].date)
            setUserName(images[countImg].displayName)
            setUserPhotoUrl(images[countImg].AuthorPhotoURL)
            setId(countImg)
        } else {
            setPhotoSrc(images[id - 1].photoURL)
            setPhotoDate(images[id - 1].date)
            setUserName(images[id - 1].displayName)
            setUserPhotoUrl(images[id - 1].AuthorPhotoURL)
            setId(id - 1)
        }
    }

    const rightSlide = () => {
        if (id === countImg) {
            setPhotoSrc(images[0].photoURL)
            setPhotoDate(images[0].date)
            setUserName(images[0].displayName)
            setUserPhotoUrl(images[0].AuthorPhotoURL)
            setId(0)
        } else {
            setPhotoSrc(images[id + 1].photoURL)
            setPhotoSrc(images[id + 1].photoURL)
            setPhotoDate(images[id + 1].date)
            setUserName(images[id + 1].displayName)
            setUserPhotoUrl(images[id + 1].AuthorPhotoURL)
            setId(id + 1)
        }
    }

    return (
        <div className={s.modal_overlay} data-close={"true"} onClick={closeModalPhoto}>
            <div className={s.modal}>
                <div className={s.left}>
                    <div className={s.slider} onClick={leftSlide}>&lt;</div>
                    <div className={s.img_block}><img src={photoSrc} alt="#" className={s.img}/></div>
                    <div className={s.slider} onClick={rightSlide}>&gt;</div>
                </div>
                <div className={s.right}>
                    <div className={s.author}>
                        <img className={s.circle} src={userPhotoUrl} ></img>
                        <div className={s.author_name}>{userName}</div>
                        <span className={s.date}>{photoDate}</span>
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.comments}>
                        {displayComment.map(comment => {
                            return (
                                <div className={s.comment} key={comment.key}>
                                    <div className={s.com_author_block}>
                                        <div className={s.com_author_name}>{comment.displayName}</div>
                                        <div className={s.comment_date}>{comment.date}</div>
                                    </div>
                                    <div className={s.com_text_block}>
                                        <img className={s.com_circle} ></img>
                                        <div className={s.comment_text}>{comment.comment}</div>
                                    </div>
                                </div>
                            )})}
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.form}>
                        <input type="text"
                               placeholder="Добавить комментарий..."
                               onChange={(e) => setComment(e.target.value)}
                               value={comment}/>
                        <button onClick={sendComment} >Опубликовать</button>
                    </div>
                </div>
                <div className={s.gallery}>
                    <div className={s.gallery_slider} onClick={leftGallery}>&lt;</div>
                    {sliders.map(photo => <div key={photo.key}
                                               onClick={getImgFromGallery}
                                               className={s.gallery_img}><img src={photo.photoURL}
                                                                              id={photo.id} alt={"#"}
                                                                              data-userphoto={photo.AuthorPhotoURL}
                                                                              data-username={photo.displayName}
                                                                              data-date={photo.date}
                    /></div>)}
                    <div className={s.gallery_slider} onClick={rightGallery}>&gt;</div>
                </div>
            </div>
            <div className={s.x} data-close={"true"}>&times;</div>
        </div>
    )
}


