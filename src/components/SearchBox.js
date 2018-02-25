import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="flex-heading">
      <h3> Search Headlines and Twitter </h3>
      <form onSubmit={props.handleOnSubmit}>
        <input
          onChange={props.handleOnChange}
          type="text"
          value={props.inputValue}
        />
        <input
          type="submit"
          value="Twogle"
        />
        <button>
          Clear History
        </button>
      </form>
    </div>
  )
}

export default SearchBox
