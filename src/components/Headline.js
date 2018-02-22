import React from 'react';

const Headline = ({headline}) => {
  return (
    <div className="newscard">
      <img style={{width: "75px"}} src={headline.urlToImage} alt={headline.title} />
      <br />
      <b><a href={headline.url}>{headline.title}</a></b>
      <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
      <div>{headline.description}</div>
    </div>
  )
}

export default Headline;
