import React, { Component } from 'react';
import { retrieveSearches, clearHistory } from '../actions/searchActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props
import { NavLink } from 'react-router-dom';
import HistoryList from '../components/HistoryList';

class HistoryPage extends Component {
  componentDidMount() {
    this.props.retrieveSearches();
  }

  render() {
    return (
      <HistoryList search={this.props.search}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    retrieveSearches,
    clearHistory
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
