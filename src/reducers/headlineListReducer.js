const headlineListReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'FETCH_HEADLINES':
      return action.headlines
    case 'NO_HEADLINES_FOUND':
      // debugger;
      return 'no headlines were found';
    default:
      return state;
  }
}

export default headlineListReducer;
