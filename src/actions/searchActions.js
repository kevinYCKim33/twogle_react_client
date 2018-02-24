import fetch from 'isomorphic-fetch';

export const updateSearch = (searchKeyWords) => {
  return {type: 'UPDATE_SEARCH', searchKeyWords};
}

export const storeSearch = (searchKeyWords) => {
  // debugger;
  return {type: 'STORE_SEARCH', searchKeyWords}
}
