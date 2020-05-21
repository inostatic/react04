import React from "react"
import s from "./navbar.module.scss"
import {NavLink} from "react-router-dom";
import {ModalAuth} from "../Modal/auth/ModalAuth";
import {openCloseModalAuth} from "../../actions/actions";
import {connect} from "react-redux";
import {thunkCreateUser, thunkInput, thunkOutput} from "../../reducers/authReducer";


const Navbar = ({auth, modalAuth, openCloseModalAuth, thunkCreateUser, thunkInput, thunkOutput}) => {


    return (
        <>
            <header className={s.header}>

                {
                     auth
                        ? <>
                             <NavLink className={s.nav} to="/">Моя страница</NavLink>
                             <NavLink className={s.nav} to="profile">Профиль</NavLink>
                             <button className={s.btn} onClick={thunkOutput}>Выйти</button>
                         </>
                        : <button className={s.btn} onClick={openCloseModalAuth}>Войти</button>
                }
            </header>
            {modalAuth ? <ModalAuth modalAuth={modalAuth}
                                openCloseModalAuth={openCloseModalAuth}
                                    thunkCreateUser={thunkCreateUser}
                                    thunkInput={thunkInput}
                />
                            : null}
        </>
    )
}

export const NavbarContainer = connect((state) => ({auth: state.authReducer.auth, modalAuth: state.modalReducer.modalAuth}), {
    openCloseModalAuth,
    thunkCreateUser,
    thunkInput,
    thunkOutput
})(Navbar)