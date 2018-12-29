import { doubanBook } from '../../apiUrl';

export const receiveDoubanBook = (myjson) => ({
    type: 'RECEIVE_DOUBAN_BOOK',
    payload: {
        results:myjson
    },
});

export const getDoubanBook = (searchText) => (dispatch) => (
    fetch(`${doubanBook}search?q=${searchText}`)
        .then(res => res.json())
        .then(myjson => dispatch(receiveDoubanBook(myjson)))
        
);
