const headlineListReducer = (state = {results: [], submittedSearch: ''}, action) => {
  console.log(action);
  switch(action.type) {
    case 'FETCH_HEADLINES':
      return {results: action.headlines, submittedSearch: action.submittedSearch}
    case 'NO_HEADLINES_FOUND':
      // debugger;
      return {result: false, submittedSearch: action.submittedSearch};
    default:
      return state;
  }
}

export default headlineListReducer;
