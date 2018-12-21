const initState = {
  results: {},
};
  
const indexReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_TIANQI':
      return Object.assign({}, state, {
        results: action.payload.results,
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

export default indexReducer;