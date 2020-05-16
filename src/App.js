import React from "react";
import './App.scss';
import {NavbarContainer} from "./components/Navbar/Navbar";
import {MainContainer} from "./components/Main/Main";
import {Profile} from "./components/Profile/Profile";
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
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                </div>
            </Provider>
        )

}





export default App;
















//
// function App({auth}) {
//     debugger
//     if (auth) {
//         return (
//             <div className="App">
//                 <Navbar/>
//                 <Switch>
//                     <Route exact path="/" component={Main}/>
//                     <Route path="/profile" component={Profile}/>
//                 </Switch>
//             </div>
//         )
//     }
//     return (
//         <div className="App">
//             <AuthContainer/>
//         </div>
//     )
//
//
// }

// return (
//     <Provider store={store}>
//         <div className="App">
//             {
//                 !auth ? <AuthContainer/>
//                     :
//                     <>
//                         <Navbar/>
//                         <Switch>
//                             <Route exact path="/" component={Main}/>
//                             <Route path="/profile" component={Profile}/>
//                         </Switch>
//                     </>
//             }
//         </div>
//     </Provider>
//
// )


//
// function App() {
//     let store = createStore(reducers,
//         composeWithDevTools(applyMiddleware(thunk)))
//     let auth = store.getState().auth
//
//     if (!auth) {
//         return (
//             <Provider store={store}>
//                 <AuthContainer/>
//             </Provider>
//         )
//     } else {
//         return (
//             <Provider store={store}>
//                 <div className="App">
//                     <Navbar/>
//                     <Switch>
//                         <Route exact path="/" component={Main}/>
//                         <Route path="/profile" component={Profile}/>
//                     </Switch>
//                 </div>
//             </Provider>
//         )
//     }
// }
//
