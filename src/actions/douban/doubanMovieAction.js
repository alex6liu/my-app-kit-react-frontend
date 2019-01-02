import { doubanMovie } from '../../apiUrl';

export const receiveDoubanMovie = (myjson) => ({
    type: 'RECEIVE_DOUBAN_MOVIE',
    payload: {
        results:myjson
    },
});

export const getDoubanMovie = (searchText) => (dispatch) => (
    fetch(`${doubanMovie}search?q=${searchText}`)
        .then(res => res.json())
        .then(myjson => dispatch(receiveDoubanMovie(myjson)))
        
);
