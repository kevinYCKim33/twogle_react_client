import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

class TweetList extends React.Component {

  componentDidMount() {
    this.addTwitterScript()
  }

  addTwitterScript() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset="utf-8";
    document.body.appendChild(script);
  }

  render() {
    const tweets = this.props.tweets.results.map((tweet, index) => {
        return (
          <Tweet key={index} tweet={tweet}/>
        )
      })

    return (
      <div >
        <h4><b>{this.props.tweets.results.length}</b> tweets returned for <b>{this.props.tweets.submittedSearch}</b> </h4>
        {tweets}
      </div>
    );
  }
}

export default TweetList;
