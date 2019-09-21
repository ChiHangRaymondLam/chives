const defaultState = {
    resources: null
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "getResources":
            //console.log('getResources'+action.data);
            newState.resources = action.data;
            return newState;
        default:
            return state;
    }
};
