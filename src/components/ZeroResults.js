import React from 'react';

const ZeroResults = ({searchedTerms, media}) => {
  return (
    <h3>
      No {media} results found for <b>{searchedTerms}</b>
    </h3>
  )
}

export default ZeroResults;
