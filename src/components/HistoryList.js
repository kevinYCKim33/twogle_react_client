import React from 'react';
import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const HistoryList = (props) => {
  // debugger;
  const searches = props.search.prevSearches
  let searchHistory;
  if (searches.length > 0) {
    searchHistory = searches.map(search => {
      return (
        <div>
          <Link to={`/searches/${search.search_url}`}>
            {search.keywords}
          </Link>
        </div>
      )
    })
  }
  return (
    <div className="History-Container">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Search History
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Clear History
          </NavItem>
        </Nav>
      </Navbar>
      <div className="History-Body">
        <div className="list-history">
          {searchHistory}
        </div>
      </div>
    </div>
  )
}

export default HistoryList
