import React from 'react';
import Headline from './Headline';
import {ListGroup} from 'react-bootstrap';

const HeadlineList = (props) => {
  return (
    <div>
      <h4><b>{props.headlines.results.length}</b> headlines returned for <b>{props.headlines.submittedSearch}</b></h4>
      <ListGroup>
      {props.headlines.results.map((headline, index) => {
        return (
            <Headline key={index} headline={headline}/>
        )
      })}
      </ListGroup>
    </div>
  )
}

export default HeadlineList;
