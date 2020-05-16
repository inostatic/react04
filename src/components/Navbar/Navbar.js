import React from "react"
import s from "./navbar.module.scss"
import {NavLink} from "react-router-dom";
import {ModalAuth} from "../Modal/auth/ModalAuth";
import {openCloseModalAuth, renderAfterInputAuth, renderAfterOutputAuth} from "../../actions/actions";
import {connect} from "react-redux";

const Navbar = ({auth, modalAuth, openCloseModalAuth, renderAfterInputAuth, renderAfterOutputAuth}) => {



    return (
        <>
            <header className={s.header}>

                {
                     auth
                        ? <>
                             <NavLink className={s.nav} to="/">Моя страница</NavLink>
                             <NavLink className={s.nav} to="profile">Профиль</NavLink>
                             <button className={s.btn} onClick={renderAfterOutputAuth}>Выйти</button>
                         </>
                        : <button className={s.btn} onClick={openCloseModalAuth}>Войти</button>
                }
            </header>
            {modalAuth ? <ModalAuth modalAuth={modalAuth}
                                openCloseModalAuth={openCloseModalAuth}
                                renderAfterInputAuth={renderAfterInputAuth}
                />
                            : null}
        </>
    )
}

export const NavbarContainer = connect((state) => ({auth: state.authReducer.auth, modalAuth: state.modalReducer.modalAuth}), {
    openCloseModalAuth,
    renderAfterInputAuth,
    renderAfterOutputAuth
})(Navbar)