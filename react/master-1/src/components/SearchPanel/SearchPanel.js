import React from 'react';

import './SearchPanel.scss';

const SearchPanel = ({changeText}) => {
  return (
    <input className="search-input form-control"
            onChange={(e) => changeText(e.target.value)}
            placeholder="search" />
  );
}

export default SearchPanel;
