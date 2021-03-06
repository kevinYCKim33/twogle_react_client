import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage';
import AboutPage from '../components/AboutPage';
import HistoryPage from './HistoryPage';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/history" component={HistoryPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
