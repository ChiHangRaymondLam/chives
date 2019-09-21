import {combineReducers} from 'redux';
import loginReducer from "../routes/store/login-reducer";
import localesReducer from "../locales/store/locales-reducer";
import resourcesReducer from "../components/pages/on-arrival/store/reducer"
const reducers = combineReducers({
    login: loginReducer,
    locales: localesReducer,
    subpages: resourcesReducer
});

export default reducers;
