import React from "react";
import {NavbarContainer} from "./components/Navbar/Navbar";
import {MainContainer} from "./components/Main/Main";
import {Profile, ProfileContainer} from "./components/Profile/Profile";
import {Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./store/store";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";



function App() {
    let store = createStore(reducers,
        composeWithDevTools(applyMiddleware(thunk)))
        return (
            <Provider store={store}>
                <div className="App">
                    <NavbarContainer/>
                    <Switch>
                        <Route exact path="/" component={MainContainer}/>
                        <Route path="/profile" component={ProfileContainer}/>
                    </Switch>
                </div>
            </Provider>
        )

}





export default App;
