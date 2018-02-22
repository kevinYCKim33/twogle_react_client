import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TweetList from '../components/TweetList'

class App extends Component {
  // componentDidMount() {
  //   var scriptz = <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  //   ReactDOM.render(scriptz, document.getElementById('script'));
  // }

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
    });

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
      // debugger;
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

    // const tweets = this.state.tweets.map((tweet, index) => {
    //   return (
    //     <blockquote className="twitter-tweet" data-lang={tweet.lang}><p lang={tweet.lang} dir="ltr">{tweet.full_text}</p>&mdash; {tweet.user.name} (@{tweet.user.screen_name}) <a href={"https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str + "?ref_src=twsrc%5Etfw"}>.</a></blockquote>
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
              {this.state.tweets.length > 0 &&
                <TweetList tweets={this.state.tweets}/>
              }
            </div>

          </div>

        </div>
        // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    );
  }
}

export default App;

// working
// https://twitter.com/BillOReilly/status/965662280498204673?ref_src=twsrc%5Etfw
//
// not working
// https://twitter.com/BillOReilly/status/965662280498204700?ref_src=twsrc%5Etfw
