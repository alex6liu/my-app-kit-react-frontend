const initState = {
    have: 0,
    read: 0,
};

const haveReadCount = (state = initState, action) => {
    switch (action.type) {
        case 'GET_HAVE':
            return Object.assign({}, state, action.payload.haveHad);
        case 'GET_READ':
            return Object.assign({}, state, action.payload.haveRead);
        default:
            return state;
    }
};

export default haveReadCount;