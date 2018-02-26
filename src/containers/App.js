import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage}/>
      </Router>
    );
  }
}

export default App;
