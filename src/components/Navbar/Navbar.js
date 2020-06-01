import React, {useEffect} from "react"
import s from "./navbar.module.scss"
import {NavLink} from "react-router-dom";
import {ModalAuth} from "../Modal/auth/ModalAuth";
import {openCloseModalAuth} from "../../actions/actions";
import {connect} from "react-redux";
import {checkAuth, createUser, signIn, signOut} from "../../actions/thunk";


const Navbar = ({auth, modalAuth, openCloseModalAuth, createUser, signIn, signOut, checkAuth}) => {

    useEffect(() => {
        checkAuth()
    },[])

    return (
        <>
            <header className={s.header}>

                {
                     auth
                        ? <>
                             <NavLink className={s.nav} to="/">Моя страница</NavLink>
                             <NavLink className={s.nav} to="profile">Профиль</NavLink>
                             <button className={s.btn} onClick={signOut}>Выйти</button>
                         </>
                        : <button className={s.btn} onClick={openCloseModalAuth}>Войти</button>
                }
            </header>
            {modalAuth ? <ModalAuth modalAuth={modalAuth}
                                openCloseModalAuth={openCloseModalAuth}
                                    createUser={createUser}
                                    signIn={signIn}
                />
                            : null}
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        auth: state.authReducer.auth,
        modalAuth: state.modalReducer.modalAuth
    }
}

export const NavbarContainer = connect(mapStateToProps, {
    openCloseModalAuth,
    createUser,
    signIn,
    signOut,
    checkAuth
})(Navbar)