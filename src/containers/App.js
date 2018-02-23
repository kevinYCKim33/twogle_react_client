import React, { Component } from 'react';

import './App.css';
import 'isomorphic-fetch';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBox from '../components/SearchBox'
import HeadlineList from '../components/HeadlineList'
import TweetList from '../components/TweetList'
import ZeroResults from '../components/ZeroResults'
import { updateSearch } from '../actions/searchActions'
import { fetchHeadlines } from '../actions/headlineActions'
import { fetchTweets, deleteTweets } from '../actions/twitterActions'

import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props


class App extends Component {

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.fetchHeadlines(this.props.search);
    this.props.deleteTweets();
    this.props.fetchTweets(this.props.search);
  }

  render() {
    // debugger;
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
              search={this.props.search.keywords}
            />
          </div>
          <br />
          <div id="flex-body">
            <div>
              {this.props.headlines === 'no headlines were found' ? (
                <ZeroResults searchKey={this.props.search}/>
              ) : (
                <HeadlineList headlines={this.props.headlines}/>
              )}
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
    fetchTweets,
    deleteTweets,
    fetchHeadlines,
    updateSearch,
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { tweets: state.tweets, headlines: state.headlines, search: state.search };
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
