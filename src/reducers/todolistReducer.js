const initState = {
    productsDetails: [],
    errMessage: '',
    isLoading: true,
    selectedCategory: '',
  };
  
  const todolistReducer = (state = initState, action) => {
    switch (action.type) {
      case 'RECEIVE_PRODUCT_LIST':
        return Object.assign({}, state, {
          productsDetails: action.payload.productsDetails,
          selectedCategory: action.payload.selectedCategory,
          isLoading: false,
        });
      case 'RECEIVE_FAILURE':
        return Object.assign({}, state, {
          errMessage: action.payload.message,
          isLoading: false,
        });
      default:
        return state;
    }
  };
  
  export default todolistReducer;