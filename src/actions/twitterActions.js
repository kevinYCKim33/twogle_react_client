import fetch from 'isomorphic-fetch';

export const fetchTweets = (searchKeyWords) => {
  return function(dispatch) {
    // dispatch({type: LOADING_TWEETS})
    return fetch('http://localhost:3001/api/tweets/load_tweets/', {
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
    }).then(tweets => {
      dispatch({type: 'FETCH_TWEETS', tweets})
    });
  }
}

// export default fetchTweets; won't work with this syntax
