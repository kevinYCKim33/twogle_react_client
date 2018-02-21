import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
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

  handleOnSubmit = (e) => {
    e.preventDefault();
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
          <b><a href={headline.url}>{headline.title}</a></b>
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
              <h3>News results</h3>
              {headlines}
            </div>
            <div>
              <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The media mob, of course, is siding with LeBron James and diminishing Laura Ingraham.  Just another example of corruption.  Labeling Americans racist has become a vicious sport that the national press embraces.</p>&mdash; Bill O&#39;Reilly (@BillOReilly) <a href="https://twitter.com/BillOReilly/status/965662280498204673?ref_src=twsrc%5Etfw">February 19, 2018</a></blockquote>
              <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Great times celebrating at our annual “The Game Is Everything” All-Star Dinner! <a href="https://twitter.com/BenSimmons25?ref_src=twsrc%5Etfw">@BenSimmons25</a> <a href="https://twitter.com/RealTristan13?ref_src=twsrc%5Etfw">@RealTristan13</a> <a href="https://twitter.com/JohnWall?ref_src=twsrc%5Etfw">@JohnWall</a> <a href="https://twitter.com/KingJames?ref_src=twsrc%5Etfw">@KingJames</a> <a href="https://t.co/zD5skwu3U0">pic.twitter.com/zD5skwu3U0</a></p>&mdash; Klutch Sports Group (@KlutchSports) <a href="https://twitter.com/KlutchSports/status/965303997979439104?ref_src=twsrc%5Etfw">February 18, 2018</a>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
