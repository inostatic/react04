import React from "react"
import s from "./ModalPhoto.module.css"

export const ModalPhoto = ({openCloseModalPhoto, src}) => {
    let d = new Date()
    let date = ` ${d.getHours()}:${d.getMinutes()} ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`

    const closeModalPhoto = (event) => {
        if(event.target.dataset.close === "true") {
            openCloseModalPhoto()
        }
    }
    return (
        <div className={s.modal_overlay} data-close={"true"} onClick={closeModalPhoto}>
            <div className={s.modal}>
                <div>
                    <img src={src} alt=""/>
                </div>
                <div className={s.right}>
                    <div>
                        <div className={s.author}>
                            <div className={s.circle}></div>
                            <b className={s.author_name}>Anastasya Lalz</b>
                            <span className={s.date}>{date}</span>
                        </div>
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
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non?</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Andrew Grinch</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Eric Cartman</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Anastasya Buchkova</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Cloud Rise</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum illo iure libero, recusandae tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>So Gerera</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Obi-Wan Kenobi</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Stanislav Bogdanov</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <div className={s.comment}>
                            <div className={s.com_author_block}>
                                <div className={s.com_author_name}>Stanislav Bogdanov</div>
                                <div className={s.comment_date}>{date}</div>
                            </div>
                            <div className={s.com_text_block}>
                                <div className={s.com_circle}></div>
                                <div className={s.comment_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non? Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                    </div>
                    <hr className={s.hr}/>
                    <div className={s.form}>

                        <input type="text" placeholder="Добавить комментарий..."/>
                        <button>Опубликовать</button>
                    </div>
                </div>
            </div>
            <div className={s.x} data-close={"true"}>&times;</div>
        </div>
    )
}


