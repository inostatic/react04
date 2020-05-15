import React, {useEffect, useState} from "react"
import "./auth.css"
import {authWithEmailAndPassword} from "../../API/auth";

import {connect} from "react-redux";
import {renderAfterInputAuth} from "../../actions/actions";
import {Navbar} from "../Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {Main} from "../Main/Main";
import {Profile} from "../Profile/Profile";


const Auth = (props) => {
    console.log(props)
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    let [form, setForm] = useState(false)

    const AuthLogin = () => {
        setForm(!form)
    }

    useEffect(() => {
        authWithEmailAndPassword(email, pass)
            .then(token => props.renderAfterAuth(token))
        setPass('')
        setEmail('')
    }, [form])

    if(!props.token) {
        return (
            <div className={"auth"}>
                <div className={"form"}>
                    <label>Логин:</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
                    <label>Пароль:</label>
                    <input type="password" onChange={e => setPass(e.target.value)} value={pass}/>
                    <div className={"btn_reg"}>
                        <button onClick={AuthLogin}>Войти</button>
                        <button>Регистрация</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </div>
        )
    }


}

let AuthContainer = connect((state) => ({token: state.reducer.token}), {
    renderAfterAuth
})(Auth)

export default AuthContainer
