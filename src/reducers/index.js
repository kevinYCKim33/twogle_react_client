import { combineReducers } from 'redux';
import twitterListReducer from './twitterListReducer';
import headlineListReducer from './headlineListReducer';


export default combineReducers({
  tweets: twitterListReducer,
  headlines: headlineListReducer
});

// basically, the key is the react-redux state value stored in the
// store...and the value is the return value from the reducer.
// this way the twitterListReducer can only focus on returning arrays
// instead of {tweets: action.tweets}
