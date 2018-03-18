import React from 'react';
import {ListGroupItem} from 'react-bootstrap';


const Headline = ({headline}) => {
  return (
    <ListGroupItem href={headline.url} className="headline-panel">
      <img style={{width: "75px"}} src={headline.urlToImage} alt={headline.title} />
      <br />
      <b>{headline.title}</b>
      <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
      <div>{headline.description}</div>
    </ListGroupItem>
  )
}

export default Headline;
