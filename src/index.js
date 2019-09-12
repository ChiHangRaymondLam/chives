import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from './store/store';
import {PersistGate} from "redux-persist/integration/react";
import AppAuth from "./routes/App-auth";
import Login from "./components/pages/login";
import Loading from "./components/shares/loading";

const {persistor, store} = configureStore();
ReactDOM.render(
    <Provider store={store} loading={<Loading/>}>
        <HashRouter>
            <PersistGate loading={null} persistor={persistor}>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <AppAuth/>
                </Switch>
            </PersistGate>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
