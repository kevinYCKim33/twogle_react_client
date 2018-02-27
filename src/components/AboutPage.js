import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import twitterLogo from '../twitter2.jpg';
import newsAPILogo from '../NewsApiLogo.png';


const AboutPage = () => {
  return (
    <div>
      <header className="App-header">
          <div id="title"><NavLink to="/" style={{color: 'white'}}>Twogle</NavLink></div>

        <div id="history-log">
          <NavLink to="/about" style={{color: 'white', marginRight: '10px'}}>
            About
          </NavLink>
          <NavLink to="/history" style={{color: 'white'}}>
            View History
          </NavLink>
        </div>
      </header>
      <div className="App-body">
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
            <img style={{width: "50px"}} src={newsAPILogo} />
          </Col>
          <Col md={6} mdPull={6}>
            <img style={{width: "200px"}} src={twitterLogo} />
          </Col>
        </Row>

        <div id="about">

          <h3>About Twogle</h3>
          <p>Twogle lets you search for results from both Twitter&apos;s API and NewsAPI.</p>
          <p>
          See headlines from reputable news sources
          while reading reactions and hot takes about
          the headlines from Twitter!
          </p>

          <br />

          <p>
            <b>Front End:</b> React, React-Boostrap <br/>
            <b>Back End:</b> Rails, Postgres <br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
