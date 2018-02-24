import React from 'react';
import Headline from './Headline';

const HeadlineList = (props) => {
  return (
    <div>
      <h3>{props.headlines.results.length} headlines returned for {props.headlines.submittedSearch}</h3>
      {props.headlines.results.map((headline, index) => {
        return (
          <Headline key={index} headline={headline}/>
        )
      })}
    </div>
  )
}

export default HeadlineList;
