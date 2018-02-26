import React, { Component } from 'react';
import { retrieveSearches, clearHistory } from '../actions/searchActions'
import { connect } from 'react-redux'; // lets you connect to the redux store
import { bindActionCreators } from 'redux'; // lets you link dispatch actions directly to props
import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class HistoryPage extends Component {
  componentDidMount() {
    this.props.retrieveSearches();
  }

  render() {
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
            <ol>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
              <li>history</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    retrieveSearches,
    clearHistory
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
