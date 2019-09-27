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

export const getBookTags = () => async dispatch => {
    await fetch(`${bookTagsUrl}/history`)
        .then(res => res.json())
        .then(myjson => dispatch(getHistory(myjson)))
    await fetch(`${bookTagsUrl}/eco`)
        .then(res => res.json())
        .then(myjson => dispatch(getEco(myjson)))
    await fetch(`${bookTagsUrl}/cs`)
        .then(res => res.json())
        .then(myjson => dispatch(getCs(myjson)))
    await fetch(`${bookTagsUrl}/novel`)
        .then(res => res.json())
        .then(myjson => dispatch(getNovel(myjson)))
    await fetch(`${bookTagsUrl}/literture`)
        .then(res => res.json())
        .then(myjson => dispatch(getLiterture(myjson)))
    
};