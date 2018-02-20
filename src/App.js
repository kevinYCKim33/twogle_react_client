import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      tweets: [],
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    return fetch('http://localhost:3001/api/tweets/load_tweets/', {
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
    })
  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return (
        <li key={index}>{tweet.full_text}</li>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Search Tweets </h3>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.search} />
          <input type="submit" value="search" />
        </form>
        <h3>Tweet results</h3>
        <ol>
          {tweets}
        </ol>
      </div>
    );
  }
}

export default App;
