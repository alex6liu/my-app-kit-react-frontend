import { bookTagsUrl } from '../../apiUrl';

export const getHistory = json => ({
    type: 'GET_HISTORY',
    payload: {
        history: json,
    }
});

export const getEco = json => ({
    type: 'GET_ECO',
    payload: {
        eco: json,
    }
});

export const getCs = json => ({
    type: 'GET_CS',
    payload: {
        cs: json,
    }
});

export const getNovel = json => ({
    type: 'GET_NOVEL',
    payload: {
        novel: json,
    }
});

export const getLiterture = json => ({
    type: 'GET_LITERTURE',
    payload: {
        literture: json,
    }
});

export const getBookTags = () => dispatch => {
    fetch(`${bookTagsUrl}/history`)
        .then(res => res.json())
        .then(myjson => dispatch(getHistory(myjson)))
    fetch(`${bookTagsUrl}/eco`)
        .then(res => res.json())
        .then(myjson => dispatch(getEco(myjson)))
    fetch(`${bookTagsUrl}/cs`)
        .then(res => res.json())
        .then(myjson => dispatch(getCs(myjson)))
    fetch(`${bookTagsUrl}/novel`)
        .then(res => res.json())
        .then(myjson => dispatch(getNovel(myjson)))
    fetch(`${bookTagsUrl}/literture`)
        .then(res => res.json())
        .then(myjson => dispatch(getLiterture(myjson)))
    
};