import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeadlineList from '../components/HeadlineList'
import TweetList from '../components/TweetList'

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      tweets: [],
      headlines: []
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState ({
      tweets: [],
    })
    fetch('http://localhost:3001/api/headlines/load_headlines/', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: this.state.search
      })
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      this.setState({
        headlines: responseJSON
      })
    })

    fetch('http://localhost:3001/api/tweets/load_tweets/', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: this.state.search
      })
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      this.setState({
        tweets: responseJSON
      })
    });

  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-body">
          <div id="flex-heading">
            <h3> Search GoogleNews and Twitter </h3>
            <form onSubmit={this.handleOnSubmit}>
              <input onChange={this.handleOnChange} type="text" value={this.state.search} />
              <input type="submit" value="search" />
            </form>
          </div>
          <br />
          <div id="flex-body">
            <div>
              {this.state.headlines.length > 0 &&
                <HeadlineList headlines={this.state.headlines}/>
              }
            </div>
            <div>
              {this.state.tweets.length > 0 &&
                <TweetList tweets={this.state.tweets}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
