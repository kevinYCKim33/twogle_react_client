import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="flex-heading">
      <h3> Search Headlines and Twitter </h3>
      <form onSubmit={props.handleOnSubmit}>
        <input
          onChange={props.handleOnChange}
          type="text"
          value={props.search}
        />
        <input
          type="submit"
          value="Twogle"
        />
      </form>
    </div>)
}

export default SearchBox;
