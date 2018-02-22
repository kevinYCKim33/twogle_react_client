import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WrapperApp } from './containers/App';
// npm install redux react-redux --save
// npm install --save redux
// npm install --save redux-thunk
import { createStore, applyMiddleware, compose } from 'redux'; // gives you access to store.dispatch and store.getState
import { Provider } from 'react-redux'; // gives children access to the react store
import thunk from 'redux-thunk'; // lets you write complicated dispatch functions
import registerServiceWorker from './registerServiceWorker';
import twitterListReducer from './reducers/twitterListReducer';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(
  twitterListReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
); /* code change */

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
