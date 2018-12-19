import { shoppingCartUrl } from '../../apiUrl';

export const receiveShoppings = (myjson) => ({
    type: 'RECEIVE_SHOPPINGS',
    payload: {
        shoppings:myjson
    },
});

export const getShoppings = () => (dispatch) => (
    fetch(shoppingCartUrl)
        .then(res => res.json())
        .then(myjson => dispatch(receiveShoppings(myjson)))      
);

export const addShopping = (name, currentPrice, minPrice, link, createTime) => (dispatch) => (
    fetch(shoppingCartUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          currentPrice,
          minPrice,
          link,
          createTime,
        }),
      })
      .then(() => dispatch(getShoppings())) 
);

export const handleDeleteAction = (id) => (dispatch) => (
    fetch(shoppingCartUrl+`/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => dispatch(getShoppings()))
);