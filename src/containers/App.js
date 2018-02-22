import React, { Component } from 'react';

import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBox from '../components/SearchBox'
import HeadlineList from '../components/HeadlineList'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/twitterActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props


class App extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      headlines: []
    }

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    // this.setState ({
    //   tweets: [],
    // })
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
    }).then(headlines => {
      this.setState({
        headlines
      })
    })

    this.props.fetchTweets(this.state.search);
    // fetch('http://localhost:3001/api/tweets/load_tweets/', {
    //   method: "post",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     search: this.state.search
    //   })
    // }).then(response => {
    //   return response.json()
    // }).then(tweets => {
    //   this.setState({
    //     tweets
    //   })
    // });


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
          <div className="flex-heading">
            <SearchBox
              handleOnSubmit={this.handleOnSubmit}
              handleOnChange={this.handleOnChange}
              search={this.state.search}
            />
          </div>
          <br />
          <div id="flex-body">
            <div>
              {this.state.headlines.length > 0 &&
                <HeadlineList headlines={this.state.headlines}/>
              }
            </div>
            <div>
              {this.props.tweets.length > 0 &&
                <TweetList tweets={this.props.tweets}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTweets
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { tweets: state.tweets };
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
