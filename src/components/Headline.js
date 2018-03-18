import React from 'react';
import {ListGroupItem} from 'react-bootstrap';


const Headline = ({headline}) => {
  return (
    <ListGroupItem href={headline.url} className="headline-panel">
      <div className="flex-headline">
        <img src={headline.urlToImage} alt={headline.title} />
        <div>
          <div style={{color: 'blue'}}>{headline.title}</div>
          <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
          <div>{headline.description}</div>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default Headline;
