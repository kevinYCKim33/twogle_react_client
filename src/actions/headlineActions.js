import fetch from 'isomorphic-fetch';

export const fetchHeadlines = (searchKeyWords) => {
  return function(dispatch) {
    return fetch('http://localhost:3001/api/headlines/load_headlines/', {
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
    }).then(headlines => {
      dispatch({type: 'FETCH_HEADLINES', headlines})
    })
  }
}