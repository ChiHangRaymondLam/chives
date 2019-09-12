import {combineReducers} from 'redux';
import loginReducer from "../routes/store/login-reducer";
import localesReducer from "../locales/store/locales-reducer";

const reducers = combineReducers({
    login: loginReducer,
    locales: localesReducer,
});

export default reducers;
