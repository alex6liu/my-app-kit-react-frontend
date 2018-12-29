const initState = {
    results: {},
  };
    
  const doubanBookReducer = (state = initState, action) => {
    switch (action.type) {
      case 'RECEIVE_DOUBAN_BOOK':
        return Object.assign({}, state, {
          results: action.payload.results,
        });
      default:
        return state;
    }
  };
  
  export default doubanBookReducer;