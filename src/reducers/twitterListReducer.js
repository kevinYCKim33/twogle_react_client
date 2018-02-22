const twitterListReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {

    // case 'LOADING_TWEETS':
    //   return 'hey'
      // return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
    case 'FETCH_TWEETS':
      return action.tweets
    case 'DELETE_TWEETS':
      return []
    default:
      return state;
  }
}

export default twitterListReducer;
