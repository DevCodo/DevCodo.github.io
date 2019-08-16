import React from 'react';
import {observer} from 'mobx-react';
import store from './../service/store';
import Price from '../Price';
import Cart from '../Cart';
import Bill from '../Bill';

@observer class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Price />
        <Cart />
        {store.isShowBill ? <Bill /> : false}
      </React.Fragment>
    )
  }
};

export default App;

