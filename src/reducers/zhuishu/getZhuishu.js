const initState = {
    results: [],
    bookinfo: {},
    chapters: {},
    chapterDetail: {},
};

const getZhuishuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVE_ZHUISHU':
            return Object.assign({}, state, {
                results:action.payload.results,
            });
        case 'RECEIVE_BOOKINFO':
            return Object.assign({}, state, {
                bookinfo: action.payload.bookinfo,
            });
        case 'RECEIVE_CHAPTERS':
            return Object.assign({}, state, {
                chapters: action.payload.chapters,
            });
        case 'RECEIVE_CHAPTER_DETAIL':
            return Object.assign({}, state, {
                chapterDetail: action.payload.chapterDetail,
            });
        default:
            return state;
    }
};

export default getZhuishuReducer;