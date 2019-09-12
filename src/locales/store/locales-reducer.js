import {SET_LOCALES} from './actions'
import {getDefaultLang} from "../messages";

const defaultState = {
    lang: getDefaultLang(window.navigator.language),
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_LOCALES:
            newState.lang = action.value;
            return newState;
        default:
            return state;
    }
};
