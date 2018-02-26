import React, { Component } from 'react';
import { updateSearch, storeSearch, retrieveSearches, clearHistory } from '../actions/searchActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props
import SearchBox from '../components/SearchBox';

class SearchBoxContainer extends Component {
  constructor() {
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    this.props.retrieveSearches();
  }

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleClearHistory = () => {
    this.props.clearHistory();
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const search = this.props.search.keywords
    this.props.history.push('searches/' + encodeURIComponent(search))
    this.props.storeSearch(search);
    this.props.fetchHeadlines(search);
    this.props.deleteTweets();
    this.props.fetchTweets(search);
  }

  render() {
    const searchHistory = this.props.search.prevSearches.map(search => {
      return (
        <li> {search.keywords} </li>
      )
    })
    return(
      <div>
      <SearchBox
        handleOnSubmit={this.handleOnSubmit}
        handleOnChange={this.handleOnChange}
        inputValue={this.props.search.keywords}
        handleOnClick={this.handleClearHistory}
      />
      <ul>
        {searchHistory}
      </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearch,
    storeSearch,
    retrieveSearches,
    clearHistory
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer)
