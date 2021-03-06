import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// npm install redux react-redux --save
// npm install --save redux
// npm install --save redux-thunk
import { createStore, applyMiddleware, compose } from 'redux'; // gives you access to store.dispatch and store.getState
import { Provider } from 'react-redux'; // gives children access to the react store
import thunk from 'redux-thunk'; // lets you write complicated dispatch functions
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers/index';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(
  combineReducers,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
