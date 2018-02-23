const searchReducer = (state = "", action) => {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return action.searchKeyWords
    default:
      return state;
  }
}

export default searchReducer;