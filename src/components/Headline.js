import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import defaultNewsPic from '../Newspaper-Icon.jpg';


class Headline extends React.Component {
  //handle broken image links
  addDefaultSrc = (ev) => {
    ev.target.src = defaultNewsPic
  };

  render() {
    const {headline} = this.props;
    if (!headline.urlToImage) {
      headline.urlToImage = defaultNewsPic; //handles null image links
    }
    return (
      <ListGroupItem href={headline.url} className="headline-panel">
        <div className="flex-headline">
          <img onError={this.addDefaultSrc} src={headline.urlToImage} alt={headline.title} />
          <div>
            <div style={{color: 'blue'}}>{headline.title}</div>
            <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
            <div>{headline.description}</div>
          </div>
        </div>
      </ListGroupItem>
    );
  }

}

// const Headline = ({headline}) => {
//   if (!headline.urlToImage) {
//     headline.urlToImage = defaultNewsPic;
//   }
//
//   return (
//     <ListGroupItem href={headline.url} className="headline-panel">
//       <div className="flex-headline">
//         <img onError={this.addDefaultSrc} src={headline.urlToImage} alt={headline.title} />
//         <div>
//           <div style={{color: 'blue'}}>{headline.title}</div>
//           <div><span style={{color: 'green'}}>({headline.source.name})</span> - {new Date(headline.publishedAt).toString()} </div>
//           <div>{headline.description}</div>
//         </div>
//       </div>
//     </ListGroupItem>
//   )
// }

export default Headline;
