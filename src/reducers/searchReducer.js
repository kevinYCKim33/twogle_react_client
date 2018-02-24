const searchReducer = (state = {keywords: "", prevSearches: []}, action) => {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return {...state, keywords: action.searchKeyWords}
    case 'STORE_SEARCH':
      // debugger;
      return {...state, prevSearches: [...state.prevSearches, action.searchKeyWords]}
    default:
      return state;
  }
}

export default searchReducer;
