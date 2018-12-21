import { zhuishuSearch, zhuishuChapter, zhuishuChapterDetail } from '../../apiUrl';

export const receiveZhuishu = (myjson) => ({
    type: 'RECEIVE_ZHUISHU',
    payload: {
        results:myjson
    },
});

export const getZhuishu = (searchText) => (dispatch) => (
    fetch(`${zhuishuSearch}fuzzy-search?query=${searchText}&start=0&limit=5`)
        // .then(res=> console.log(res))
        .then(res => res.json())
        .then(myjson => dispatch(receiveZhuishu(myjson)))  
);

export const receiveBookInfo = (myjson) => ({
    type: 'RECEIVE_BOOKINFO',
    payload: {
        bookinfo: myjson,
    }
});

export const getBookInfo = id => dispatch => (
    fetch(`${zhuishuSearch}${id}`)
        .then(res => res.json())
        .then(myjson => dispatch(receiveBookInfo(myjson)))  
)

export const receiveChapters = myjson => ({
    type: 'RECEIVE_CHAPTERS',
    payload: {
        chapters: myjson,
    }
});

export const getChapters = id => dispatch => (
    fetch(`${zhuishuChapter}${id}?view=chapters`)
        .then(res => res.json())
        .then(myjson => myjson.mixToc.chapters)
        .then(myjson => dispatch(receiveChapters(myjson)))  
);

export const receiveChapterDetail = myjson => ({
    type: 'RECEIVE_CHAPTER_DETAIL',
    payload: {
        chapterDetail: myjson,
    }
});

export const getChapterDetail = url => dispatch => (
    fetch(`${zhuishuChapterDetail}${url}`)
        .then(res => res.json())
        .then(myjson => myjson.chapter)
        .then(myjson => dispatch(receiveChapterDetail(myjson)))  
);