import React, { Component } from 'react';
import { updateSearch, storeSearch, retrieveSearches } from '../actions/searchActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props

class SearchBox extends Component {
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
      <div className="flex-heading">
        <h3> Search Headlines and Twitter </h3>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            type="text"
            value={this.props.search}
          />
          <input
            type="submit"
            value="Twogle"
          />
        </form>
      </div>
    )
  }
}

// const SearchBox = (props) => {
//   return (
//     <div className="flex-heading">
//       <h3> Search Headlines and Twitter </h3>
//       <form onSubmit={props.handleOnSubmit}>
//         <input
//           onChange={props.handleOnChange}
//           type="text"
//           value={props.search}
//         />
//         <input
//           type="submit"
//           value="Twogle"
//         />
//       </form>
//     </div>)
// }

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
