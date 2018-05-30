import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import defaultNewsPic from '../Newspaper-Icon.jpg';
import { exactDate } from '../helpers/timeConverter.js';


const Headline = ({headline, addDefaultSrc}) => {

  if (!headline.urlToImage) {
    headline.urlToImage = defaultNewsPic; //when image is null
  }

  //addDefaultSrc: when image link is broken
  return (
    <ListGroupItem target="_blank" href={headline.url} className="headline-panel">
      <div className="flex-headline">
        <img onError={addDefaultSrc} src={headline.urlToImage} alt={headline.title} />
        <div>
          <div style={{color: 'blue'}}>{headline.title}</div>
          <div><span style={{color: 'green'}}>({headline.source.name})</span> - {exactDate(headline.publishedAt)} </div>
          <div>{headline.description}</div>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default Headline;
