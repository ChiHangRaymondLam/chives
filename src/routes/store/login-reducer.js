import {HANDLE_LOGIN} from './actions';

const defaultState = {
    isLogin: false,
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case HANDLE_LOGIN:
            newState.isLogin = action.value;
            return newState;
        default:
            return state;
    }
};
