const twitterListReducer = (state = {results: [], submittedSearch: ''}, action) => {
  console.log(action);
  switch(action.type) {

    case 'FETCH_TWEETS':
      return {results: action.tweets, submittedSearch: action.submittedSearch}
    case 'NO_TWEETS_FOUND':
      return {results: false, submittedSearch: action.submittedSearch}
    case 'DELETE_TWEETS':
      return {...state, results: [], submittedSearch: ''}
    default:
      return state;
  }
}

export default twitterListReducer;
