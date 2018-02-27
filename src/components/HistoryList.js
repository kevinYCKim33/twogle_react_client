import React from 'react';
// import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { NavLink, Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

const HistoryList = (props) => {
  // const searches = props.search.prevSearches
  // let searchHistory;
  // if (searches.length > 0) {
  //   searchHistory = searches.map(search => {
  //     return (
  //       <div>
  //         <Link to={`/searches/${search.search_url}`}>
  //           {search.keywords}
  //         </Link>
  //       </div>
  //     )
  //   })
  // }
  return (
    <div id="History">
      <header className="History-header">
        <div id="history-title">History</div>
      </header>

      <Row className="show-grid">
        <Col xs={5} md={3}>
          <code>&lt;{'Col xs={5} md={3}'} /&gt;</code>
        </Col>
        <Col xs={13} md={9}>
          <code>&lt;{'Col xs={13} md={9}'} /&gt;</code>
        </Col>
      </Row>

    </div>
  )
}

export default HistoryList
