import React from 'react';
// import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {Button, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { exactDate } from '../helpers/timeConverter.js'

const HistoryList = (props) => {
  const searches = props.search.prevSearches
  let searchHistory;
  if (searches.length > 0) {
    searchHistory = searches.map(search => {
      const timeLastSearched = exactDate(search.updated_at)
      return (
        <ListGroupItem>
          <div><b>{search.keywords}</b></div>
          <div className="search-date">{timeLastSearched}</div>
        </ListGroupItem>
      )
    })
  }
  return (
    <div id="History">
      <header className="History-header">
        <div id="history-title">History</div>
      </header>
      <br />
      <div id="history-column-container">
        <Col xs={5} md={3}>
          <Button
            bsStyle="link"
            onClick={() => props.clearHistory()}
            style={{textDecoration: "none"}}
          >
            <b>Clear Search History</b>
          </Button>
        </Col>
        {searches.length > 0 &&
          <Col xs={13} md={9}>
            <ListGroup>
              {searchHistory}
            </ListGroup>
          </Col>
        }
        {searches.length === 0 &&
          <Col className="no-history" xs={13} md={9}>
            <div><b>Your browsing history appears here.</b></div>
          </Col>
        }
      </div>
        <br />
        <br />
    </div>
  )
}

export default HistoryList
