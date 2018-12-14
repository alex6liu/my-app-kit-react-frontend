const initState = {
    history: 0,
    eco: 0,
    cs : 0,
    novel: 0,
    literture: 0,
};

const getBookTags = (state = initState, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return Object.assign({}, state, action.payload.history);
        case 'GET_ECO':
            return Object.assign({}, state, action.payload.eco);
        case 'GET_CS':
            return Object.assign({}, state, action.payload.cs);
        case 'GET_NOVEL':
            return Object.assign({}, state, action.payload.novel);
        case 'GET_LITERTURE':
            return Object.assign({}, state, action.payload.literture);
        default:
            return state;
    }
};

export default getBookTags;