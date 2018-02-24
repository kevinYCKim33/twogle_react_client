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

  // componetDidUpdate() {
  //   this.addTwitterScript()
  // }

  render() {
    let tweets;
    if (this.props.tweets.results.length > 0) {
      tweets = this.props.tweets.results.map((tweet, index) => {
        return (
          <Tweet key={index} tweet={tweet}/>
        )
      })
    }
    // debugger;
    return (
      <div >
        {this.props.tweets.submittedSearch !== "" &&
          <h3>{this.props.tweets.results.length} tweets returned </h3>
        }
        {tweets}
      </div>
    );
  }
}

export default TweetList;
