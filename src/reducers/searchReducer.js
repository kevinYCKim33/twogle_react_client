const searchReducer = (state = {keywords: "", prevSearches: []}, action) => {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return {...state, keywords: action.searchKeyWords}
    case 'RETRIEVE_SEARCHES':
      return {...state, prevSearches: action.prevSearches}
    case 'CLEAR_HISTORY':
      return {...state, prevSearches: []}
    default:
      return state;
  }
}

export default searchReducer;
