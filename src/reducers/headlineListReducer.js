const headlineListReducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'FETCH_HEADLINES':
      return action.headlines
    default:
      return state;
  }
}

export default headlineListReducer;
