import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage'
import HistoryPage from './HistoryPage'
import KevinKim from '../components/KevinKim'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/history" component={HistoryPage}/>
          <Route exact path="/kevinkim" component={KevinKim}/>
        </div>
      </Router>
    );
  }
}

export default App;
