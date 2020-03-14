const initState = {
  counter: 0
};

function appReducer(state = initState, action) {
  switch (action.type) {
    case 'APPLICATION_INCREASE':
      return ({
        ...state,
        counter: state.counter + 1
      });
    case 'APPLICATION_DECREASE':
      return ({
        ...state,
        counter: state.counter - 1
      });
    default:
      return state;
  }
}

export default appReducer;