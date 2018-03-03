import fetch from 'isomorphic-fetch';

export const updateSearch = (searchKeyWords) => {
  return {type: 'UPDATE_SEARCH', searchKeyWords};
}

export const storeSearch = (searchKeyWords) => {
  return function(dispatch) {
    return fetch('https://twogle-api.herokuapp.com/api/searches', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: searchKeyWords
      })
    }).then(response => {
      return response.json()
    }).then(search => {
      dispatch({type: 'STORE_SEARCH', search: search})
    })
  }
}

export const retrieveSearches = () => {
  return function(dispatch) {
    return fetch('https://twogle-api.herokuapp.com/api/searches')
      .then(response => {
        return response.json()
      }).then(searches => {
        dispatch({type: 'RETRIEVE_SEARCHES', prevSearches: searches})
      })
  }
}

export const clearHistory = () => {
  return function(dispatch) {
    return fetch('https://twogle-api.herokuapp.com/api/searches/clear')
      .then(() => {
        dispatch({type: "CLEAR_HISTORY"})
      })
  }
}
