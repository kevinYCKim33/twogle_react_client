import fetch from 'isomorphic-fetch';

export const updateSearch = (searchKeyWords) => {
  return {type: 'UPDATE_SEARCH', searchKeyWords};
}

export const storeSearch = (searchKeyWords) => {
  return function(dispatch) {
    return fetch('http://localhost:3001/api/searches', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: searchKeyWords
      })
    })
  }
  // return {type: 'STORE_SEARCH', searchKeyWords}
}

// export const storeSearch = (searchKeyWords) => {
//   debugger;
//   return function(dispatch) {
//     debugger;
//     // dispatch({type: LOADING_TWEETS})
//     return fetch('http://localhost:3001/api/searches', {
//       method: "post",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         search: searchKeyWords
//       })
//     })
//       .then(response => response.json())
//       .then(search => {
//         debugger;
//         dispatch({type: 'STORE_SEARCH', searchKeyWords: search.keywords })
//       })
//   }
// }
