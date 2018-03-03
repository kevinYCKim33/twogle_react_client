import fetch from 'isomorphic-fetch';

export const fetchTweets = (searchKeyWords) => {
  return function(dispatch) {
    // dispatch({type: LOADING_TWEETS})
    return fetch('https://twogle-api.herokuapp.com/api/tweets/load_tweets/', {
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
      if (tweets.length === 0) {
        dispatch({type: 'NO_TWEETS_FOUND', submittedSearch: searchKeyWords })
      } else {
        dispatch({type: 'FETCH_TWEETS', tweets: tweets, submittedSearch: searchKeyWords})
      }
    });
  }
}

export const deleteTweets = () => {
  return {type: 'DELETE_TWEETS'}
}
