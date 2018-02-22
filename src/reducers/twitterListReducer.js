const twitterListReducer = (state = {tweets: []}, action) => {
  console.log(action);
  switch(action.type) {

    // case 'LOADING_TWEETS':
    //   return 'hey'
      // return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
    case 'FETCH_TWEETS':
      return {...state, tweets: action.tweets }
    default:
      // debugger;
      // console.log("Initial state.items length: %s", state.items.length);
      return state;
  }
}

export default twitterListReducer;
