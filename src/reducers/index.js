import { combineReducers } from 'redux';
import twitterListReducer from './twitterListReducer';

export default combineReducers({
  tweets: twitterListReducer,
});
