import { hefengKey, hefengYubao } from '../../apiUrl';

export const receiveTianqi = (myjson) => ({
    type: 'RECEIVE_TIANQI',
    payload: {
        results:myjson
    },
});

export const getTianqi = (searchText) => (dispatch) => (
    fetch(`${hefengYubao}key=${hefengKey}&location=${searchText}`)
        .then(res => res.json())
        .then(myjson => dispatch(receiveTianqi(myjson)))
        
);


