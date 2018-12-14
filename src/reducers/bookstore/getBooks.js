const initState = {
    books: [],
};

const bookstoreReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVE_BOOKS':
            return Object.assign({}, state, {books:action.payload.books});
        // case 'SET_DEFAULT':
        default:
            return state;
    }
};

export default bookstoreReducer;