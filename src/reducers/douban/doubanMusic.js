const initState = {
    results: {},
  };
    
  const doubanMusicReducer = (state = initState, action) => {
    switch (action.type) {
      case 'RECEIVE_DOUBAN_MUSIC':
        return Object.assign({}, state, {
          results: action.payload.results,
        });
      default:
        return state;
    }
  };
  
  export default doubanMusicReducer;