import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet.js';

class TweetList extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset="utf-8";
    document.body.appendChild(script);
  }

  render() {
    const tweets = this.props.tweets.map((tweet, index) => {
      return (
        <Tweet key={index} tweet={tweet}/>
      )
    })
    return (
      <div >
        {tweets}
      </div>
    );
  }
}

export default TweetList;
