import React, {useState} from "react"
import s from "./modalPhoto.module.scss"

export const ModalPhoto = ({openCloseModalPhoto, src, photoId, images, username, userPhoto}) => {
    let date = "16:48 07.08.2020"
    let countImg = images.length - 1
    let [id, setId] = useState(Number(photoId))
    let [photoSrc, setPhotoSrc] = useState(src)
    let [sliders, setSliders] = useState(getSliders())


    function getSliders() {
        if (photoId < countImg - 5) {
            return images.slice(+photoId, +photoId + 6)
        } else {
            return images.slice(countImg - 5, countImg + 1)
        }
    }
    const closeModalPhoto = (event) => {
        if(event.target.dataset.close === "true") {
            openCloseModalPhoto()
        }
    }
    const getImgFromGallery = (e) => {
       setPhotoSrc(e.target.src || e.target.firstChild.src)
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
            setId(countImg)
        } else {
            setPhotoSrc(images[id - 1].photoURL)
            setId(id - 1)
        }
    }
    const rightSlide = () => {
        if (id === countImg) {
            setPhotoSrc(images[0].photoURL)
            setId(0)
        } else {
            setPhotoSrc(images[id + 1].photoURL)
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
                        <img className={s.circle} src={userPhoto} ></img>
                        <span className={s.author_name}>{username}</span>
                        <span className={s.date}>{date}</span>
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.comments}>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Stanislav Bogdanov</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non?
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Andrew Grinch</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Eric Cartman</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Anastasya Buchkova</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Mollitia, quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non?
                                    Lorem
                                    ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Cloud Rise</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}> Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Amet eum illo iure libero, recusandae tenetur?Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>So Gerera</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Obi-Wan Kenobi</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Stanislav Bogdanov</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Stanislav Bogdanov</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Hic, non? Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.form}>
                        <input type="text" placeholder="Добавить комментарий..."/>
                        <button>Опубликовать</button>
                    </div>
                </div>
                <div className={s.gallery}>
                    <div className={s.gallery_slider} onClick={leftGallery}>&lt;</div>
                    {sliders.map(photo => <div key={photo.key}
                                               onClick={getImgFromGallery}
                                               className={s.gallery_img}><img src={photo.photoURL} id={photo.id} alt={"#"}
                    /></div>)}
                    <div className={s.gallery_slider} onClick={rightGallery}>&gt;</div>
                </div>
            </div>
            <div className={s.x} data-close={"true"}>&times;</div>
        </div>
    )
}


