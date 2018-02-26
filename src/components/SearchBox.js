import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="flex-heading">
      <h3> Twogle <small style={{color: 'black'}}>Search Twitter and NewsAPI simultaneously</small> </h3>
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
        <button onClick={props.handleOnClick}>
          Clear History
        </button>
      </form>
    </div>
  )
}

export default SearchBox
