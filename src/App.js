import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';

// const maStyle = {
//   width: '50px'
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      tweets: [],
      headlines: []
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnSubmitNews = this.handleOnSubmitNews.bind(this);
  }

  // handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   return fetch('http://localhost:3001/api/tweets/load_tweets/', {
  //     method: "post",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       search: this.state.search
  //     })
  //   }).then(response => {
  //     return response.json()
  //   }).then(responseJSON => {
  //     this.setState({
  //       headlines: responseJSON
  //     })
  //   })
  // }

  handleOnSubmitNews = (e) => {
    e.preventDefault();
    return fetch('http://localhost:3001/api/headlines/load_headlines/', {
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
  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    // const tweets = this.state.tweets.map((tweet, index) => {
    //   return (
    //     <li key={index}>{tweet.full_text}</li>
    //   )
    // })
    const headlines = this.state.headlines.map((headline, index) => {
      return (
        <div key={index} className="newscard">
          <img style={{width: "75px"}} src={headline.urlToImage} alt={headline.title} />
          <br />
          <b>{headline.title}</b>
          <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
          <div>{headline.description}</div>
        </div>
      )
    })


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-body">
          <h3> Search GoogleNews </h3>
          <form onSubmit={this.handleOnSubmitNews}>
            <input onChange={this.handleOnChange} type="text" value={this.state.search} />
            <input type="submit" value="search" />
          </form>

          <h3>News results</h3>
          <div>
            {headlines}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
