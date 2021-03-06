import React, { Component } from 'react';
import 'isomorphic-fetch';
import SearchBoxContainer from './SearchBoxContainer';
import HeadlineList from '../components/HeadlineList';
import TweetList from '../components/TweetList';
import Logos from '../components/Logos';
import ZeroResults from '../components/ZeroResults';
import { fetchHeadlines, addDefaultSrc } from '../actions/headlineActions';
import { fetchTweets, deleteTweets } from '../actions/twitterActions';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props


class MainPage extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header flex">
              <div id="twogle-logo">TWOGLE</div>
              <SearchBoxContainer
                fetchHeadlines={this.props.fetchHeadlines}
                deleteTweets={this.props.deleteTweets}
                fetchTweets={this.props.fetchTweets}
                history={this.props.history}
              />

            <div id="about-history">
              <NavLink to="/about" style={{color: 'white',marginRight: '10px'}}>
                About
              </NavLink>
              <NavLink to="/history" style={{color: 'white'}}>
                View History
              </NavLink>
            </div>
          </header>

          <div className="App-body">
            <Logos />

            <div className="flex">
              <div className="flex flex-column twitter-results">
                {this.props.tweets.results === false &&
                  <ZeroResults
                    media="Twitter"
                    searchedTerms={this.props.tweets.submittedSearch}
                  />
                }
                {this.props.tweets.results.length > 0 &&
                  <TweetList
                    tweets={this.props.tweets}
                  />
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
