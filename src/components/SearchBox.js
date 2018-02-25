import React from 'react';
import { connect } from 'react-redux'; // lets you connect to the redux store

const SearchBox = (props) => {
  return (
    <div className="flex-heading">
      <h3> Search Headlines and Twitter </h3>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={props.onChange}
          type="text"
          value={props.search.keywords}
        />
        <input
          type="submit"
          value="Twogle"
        />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

export default connect(mapStateToProps)(SearchBox)
