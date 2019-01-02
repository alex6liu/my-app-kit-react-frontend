const initState = {
    results: {},
  };
    
  const doubanMovieReducer = (state = initState, action) => {
    switch (action.type) {
      case 'RECEIVE_DOUBAN_MOVIE':
        return Object.assign({}, state, {
          results: action.payload.results,
        });
      default:
        return state;
    }
  };
  
  export default doubanMovieReducer;