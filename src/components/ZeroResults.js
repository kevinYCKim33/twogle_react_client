import React from 'react';

const ZeroResults = ({searchedTerms}) => {
  // debugger;
  return (
    <h3>
      No headlines found for <b>{searchedTerms}</b>
    </h3>
  )
}

export default ZeroResults;
