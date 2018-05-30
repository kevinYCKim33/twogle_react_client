import React, { Component } from 'react';
import 'isomorphic-fetch';
import { Route, Switch } from 'react-router-dom';
import SearchBoxContainer from './SearchBoxContainer'
import HeadlineList from '../components/HeadlineList'
import TweetList from '../components/TweetList'
import ZeroResults from '../components/ZeroResults'
import { fetchHeadlines, addDefaultSrc } from '../actions/headlineActions'
import { fetchTweets, deleteTweets } from '../actions/twitterActions'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props
import {Row, Col} from 'react-bootstrap'
import twitterLogo from '../twitter2.jpg';
import newsAPILogo from '../NewsApiLogo.png';


class MainPage extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <div id="title">TWOGLE</div>
              <SearchBoxContainer
                fetchHeadlines={this.props.fetchHeadlines}
                deleteTweets={this.props.deleteTweets}
                fetchTweets={this.props.fetchTweets}
                history={this.props.history}
              />

            <div id="history-log">
              <NavLink to="/about" style={{color: 'white', marginRight: '10px'}}>
                About
              </NavLink>
              <NavLink to="/history" style={{color: 'white'}}>
                View History
              </NavLink>
            </div>
          </header>

          <div className="App-body">
            <div className="flex">
              <div className="flex-column" id="twitterLogo">
                <img style={{width: "200px"}} src={twitterLogo} />
              </div>
              <div className="flex-column" id="newsAPILogo">
                <img style={{width: "50px"}} src={newsAPILogo} />
              </div>
            </div>

            <div className="flex">
              <div className="flex-column twitter">
                {this.props.tweets.results === false &&
                  <ZeroResults
                    media="Twitter"
                    searchedTerms={this.props.tweets.submittedSearch}
                  />
                }
                {this.props.tweets.results.length > 0 &&
                  <TweetList
                    tweets={this.props.tweets}
                    style={{color: "red"}}/>
                }
              </div>

              <div className="flex-column newsAPI ">
                {this.props.headlines.results === false &&
                  <ZeroResults
                    media="NewsAPI"
                    searchedTerms={this.props.headlines.submittedSearch}
                  />
                }
                {this.props.headlines.results.length > 0 &&
                  <HeadlineList
                    headlines={this.props.headlines}
                    addDefaultSrc={this.props.addDefaultSrc}
                  />
                }
              </div>
            </div>

          </div>
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTweets,
    deleteTweets,
    fetchHeadlines,
    addDefaultSrc
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { tweets: state.tweets, headlines: state.headlines, search: state.search };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
