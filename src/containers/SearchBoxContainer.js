import React, { Component } from 'react';
import { updateSearch, storeSearch, retrieveSearches } from '../actions/searchActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props
import SearchBox from '../components/SearchBox';
class SearchBoxContainer extends Component {
  componentDidMount() {
    this.props.retrieveSearches();
  }

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.storeSearch(this.props.search.keywords);
    this.props.fetchHeadlines(this.props.search.keywords);
    this.props.deleteTweets();
    this.props.fetchTweets(this.props.search.keywords);
  }

  render() {
    return(
      <SearchBox
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange}
        value={this.props.search.keywords}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearch,
    storeSearch,
    retrieveSearches
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer)
