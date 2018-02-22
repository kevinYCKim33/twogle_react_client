import React from 'react';

const Tweet = ({tweet}) => {
  return (
    <blockquote className="twitter-tweet" data-lang={tweet.lang}><p lang={tweet.lang} dir="ltr">{tweet.full_text}</p>&mdash; {tweet.user.name} (@{tweet.user.screen_name}) <a href={"https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str + "?ref_src=twsrc%5Etfw"}>.</a></blockquote>
  )
}

export default Tweet;
