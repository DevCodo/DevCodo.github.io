import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter/counter';

ReactDOM.render(<Counter  min={0} max={50} />, document.querySelector('#root'));
