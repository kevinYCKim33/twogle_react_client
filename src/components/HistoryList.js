import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { HistoryLog } from './HistoryLog.js';

const HistoryList = (props) => {
  const searches = props.search.prevSearches
  let searchHistory;
  if (searches.length > 0) {
    searchHistory = searches.map((search, i) => {
      return (
        <HistoryLog search={search} key={i}/>
      )
    })
  }
  return (
    <div id="History">
      <header className="History-header">
        <div id="history-title">History</div>
      </header>
      <div id="clear-and-logs" style={{display: "flex",  margin: "30px"}}>
        <div id="clear-history">
          <Button
            bsStyle="link"
            onClick={() => props.clearHistory()}
            style={{textDecoration: "none"}}
          >
            <b>Clear Search History</b>
          </Button>
        </div>
        {searches.length > 0 &&
        <div id="logs">
          <ListGroup>
            {searchHistory}
          </ListGroup>
        </div>
        }
        {searches.length === 0 &&
        <div id="logs" className="no-history">
          <div><b>Your browsing history appears here.</b></div>
        </div>
        }
      </div>
    </div>
  )
}

export default HistoryList;
