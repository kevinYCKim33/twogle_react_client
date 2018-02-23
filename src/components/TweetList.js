import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

class TweetList extends React.Component {
  addTwitterScript() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset="utf-8";
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.addTwitterScript()
  }

  componetDidUpdate() {
    this.addTwitterScript()
  }

  render() {
    return (
      <div >
        <h3>{this.props.tweets.length} tweets returned </h3>
        {this.props.tweets.map((tweet, index) => {
          return (
            <Tweet key={index} tweet={tweet}/>
          )
        })}

      </div>
    );
  }
}

export default TweetList;
