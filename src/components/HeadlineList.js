import React from 'react';
import Headline from './Headline';

const HeadlineList = (props) => {
  return (
    <div>
      <h4><b>{props.headlines.results.length}</b> headlines returned for <b>{props.headlines.submittedSearch}</b></h4>
      {props.headlines.results.map((headline, index) => {
        return (
          <Headline key={index} headline={headline}/>
        )
      })}
    </div>
  )
}

export default HeadlineList;
