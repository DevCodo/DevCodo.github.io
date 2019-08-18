import React from 'react';
import store from '../service/store';
import {observer} from 'mobx-react';

import style from './Bill.module.scss';

@observer class Bill extends React.Component {

  render() {

    let perData = [];

    for ( let name in store.persData ) {
      let item = (
        <div key={store.persData[name].label}>{ store.persData[name].value }</div>
      )
      perData.push(item);
    }

    return (
      <div>
        <div>Ваш заказ</div>
        <div>На контактные данные</div>
        {perData}
        <div>На сумму: {store.total}</div>
        <button className={style.button} onClick={ () => this.props.history.push('/') }>Подтвердить</button>
      </div>
    )
  }
}

export default Bill;