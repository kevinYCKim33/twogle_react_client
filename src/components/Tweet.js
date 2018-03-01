import React, {Component} from 'react';

class Tweet extends React.Component {

  constructor() {
    super();
    this.state = {
      likes: 0
    }
  }

  handleButtonClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  callApi = () => {
    console.log('a')
    fetch('http://localhost:3001/api/searchesaj')
      .then(response => {
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        console.log('b')
        return (response.json())
      }).then(searches => {
        console.log('c',searches)
      })
      .catch(err => console.log('d', err))
      console.log('e')

      // a e b c + searchers
      // a e d + err
  }

  render () {
    return (
      <div>
        <blockquote className="twitter-tweet" data-lang={this.props.tweet.lang}><p lang={this.props.tweet.lang} dir="ltr">{this.props.tweet.full_text}</p>&mdash; {this.props.tweet.user.name} (@{this.props.tweet.user.screen_name}) <a href={"https://twitter.com/" + this.props.tweet.user.screen_name + "/status/" + this.props.tweet.id_str + "?ref_src=twsrc%5Etfw"}>.</a></blockquote>
        <div>
          <button onClick={this.handleButtonClick}> like</button>
          <button onClick={this.callApi}> call api</button>
          <b>{this.state.likes} likes!</b>
        </div>
      </div>
    )
  }
}

export default Tweet;
