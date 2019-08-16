import React from 'react';
import ReactDOM from 'react-dom';


import PriceList from '@/components/prise-list';

function App() {
  return (
    <PriceList />
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
