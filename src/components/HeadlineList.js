import React from 'react';
import Headline from './Headline';

const HeadlineList = (props) => {
  return (
    <div>
      <h3>{props.headlines.length} headlines returned</h3>
      {props.headlines.map((headline, index) => {
        return (
          <Headline key={index} headline={headline}/>
        )
      })}
    </div>
  )
}

export default HeadlineList;
