import React from 'react';
import ReactDOM from 'react-dom';


import PriceList from '~d/components/prise-list';

function App() {
  return (
    <PriceList />
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
