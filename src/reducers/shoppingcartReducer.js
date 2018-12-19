const initState = {
    shoppings: [],
  };
    
const shoppingcartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVE_SHOPPINGS':
            return Object.assign({}, state, {
                shoppings: action.payload.shoppings,
            });
        default:
            return state;
    }
};

export default shoppingcartReducer;