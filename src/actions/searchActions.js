import fetch from 'isomorphic-fetch';

export const updateSearch = (searchKeyWords) => {
  return {type: 'UPDATE_SEARCH', searchKeyWords};
}
