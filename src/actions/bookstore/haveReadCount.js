import { bookHaveUrl, bookReadUrl } from '../../apiUrl';

export const getHave = json => ({
    type: 'GET_HAVE',
    payload: {
        haveHad: json,
    }
});
export const getRead = json => ({
    type: 'GET_READ',
    payload: {
        haveRead: json,
    }
});

export const haveReadCount = () => dispatch => {
    fetch(bookHaveUrl)
        .then(res => res.json())
        .then(myjson => dispatch(getHave(myjson)))
    fetch(bookReadUrl)
        .then(res => res.json())
        .then(myjson => dispatch(getRead(myjson)))
};