import React from 'react';
import twitterLogo from '../twitter2.jpg';
import newsAPILogo from '../NewsApiLogo.png';

const Logos = () => {
  return (
    <div className="flex">
      <div className="flex-column" id="twitterLogo">
        <img style={{width: "200px"}} src={twitterLogo} />
      </div>
      <div className="flex-column" id="newsAPILogo">
        <img style={{width: "50px"}} src={newsAPILogo} />
      </div>
    </div>
  )
}



export default Logos;
