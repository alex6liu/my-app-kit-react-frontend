import { doubanMusic } from '../../apiUrl';

export const receiveDoubanMusic = (myjson) => ({
    type: 'RECEIVE_DOUBAN_MUSIC',
    payload: {
        results:myjson
    },
});

export const getDoubanMusic = (searchText) => (dispatch) => (
    fetch(`${doubanMusic}search?q=${searchText}`)
        .then(res => res.json())
        .then(myjson => dispatch(receiveDoubanMusic(myjson)))
        
);
