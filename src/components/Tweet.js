import React from 'react';

// const Tweet = ({tweet}) => {
//   return (
//     <blockquote className="twitter-tweet" data-lang={tweet.lang}><p lang={tweet.lang} dir="ltr">{tweet.full_text}</p>&mdash; {tweet.user.name} (@{tweet.user.screen_name}) <a href={"https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str + "?ref_src=twsrc%5Etfw"}>.</a></blockquote>
//   )
// }
class Tweet extends React.Component {
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset="utf-8";
    document.body.appendChild(script);
  }

  render() {
    // debugger;
    return (
      <blockquote className="twitter-tweet" data-lang={this.props.tweet.lang}><p lang={this.props.tweet.lang} dir="ltr">{this.props.tweet.full_text}</p>&mdash; {this.props.tweet.user.name} (@{this.props.tweet.user.screen_name}) <a href={"https://twitter.com/" + this.props.tweet.user.screen_name + "/status/" + this.props.tweet.id_str + "?ref_src=twsrc%5Etfw"}>.</a></blockquote>
    )
  }
}

export default Tweet;
