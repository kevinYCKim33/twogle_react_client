import React from 'react';
import { exactDate } from '../helpers/timeConverter.js';
import { ListGroupItem } from 'react-bootstrap';

export const HistoryLog = ({search}) => {
  return (
    <ListGroupItem className="history-log flex">
      <div><b>{search.keywords}</b></div>
      <div className="search-date">{exactDate(search.updated_at)}</div>
    </ListGroupItem>
  )
}
