import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// npm install redux react-redux --save
// npm install --save redux
import { createStore } from 'redux'; // gives you access to store.dispatch and store.getState
import { Provider } from 'react-redux'; // gives children access to the react store
import registerServiceWorker from './registerServiceWorker';
import twitterListReducer from './reducers/twitterListReducer';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const store = createStore(twitterListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
