import React from 'react';

const SearchBox = (props) => {
  return (
    <div id="searchform">
      <form onSubmit={props.handleOnSubmit}>
        <input
          onChange={props.handleOnChange}
          type="text"
          value={props.inputValue}
        />
        <input
          type="submit"
          value="Search"
          className="btn-sm btn-outline-primary"
        />
      </form>
    </div>
  )
}

export default SearchBox;
