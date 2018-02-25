import React, { Component } from 'react';

import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBox from './SearchBox'
import HeadlineList from '../components/HeadlineList'
import TweetList from '../components/TweetList'
import ZeroResults from '../components/ZeroResults'
import { fetchHeadlines } from '../actions/headlineActions'
import { fetchTweets, deleteTweets } from '../actions/twitterActions'

import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-body">
          <div className="flex-heading">
            <SearchBox/>
          </div>
          <br />
          <div id="flex-body">
            <div>
              {this.props.headlines.results === false &&
                <ZeroResults
                  media="NewsAPI"
                  searchedTerms={this.props.headlines.submittedSearch}
                />
              }
              {this.props.headlines.results.length > 0 &&
                <HeadlineList headlines={this.props.headlines}/>
              }
            </div>
            <div>
              {this.props.tweets.results === false &&
                <ZeroResults
                  media="Twitter"
                  searchedTerms={this.props.tweets.submittedSearch}
                />
              }
              {this.props.tweets.results.length > 0 &&
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
    fetchTweets,
    deleteTweets,
    fetchHeadlines
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { tweets: state.tweets, headlines: state.headlines, search: state.search };
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
