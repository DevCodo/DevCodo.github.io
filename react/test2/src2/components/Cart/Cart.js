import React from 'react';
import store from '../service/store';
import {observer} from 'mobx-react';
import {Link, Redirect} from 'react-router-dom';

import {routesMap} from '../service/routes';
import style from './Cart.module.scss';

 @observer class Cart extends React.Component {
 
   render() {
     let inputs = [];
   
     for ( let name in store.persData) {
       let item = (
         <div key={name}>
           <input 
                  placeholder={store.persData[name].label} 
                  onChange={ (e) => store.changePersData(name, e.target.value) }
                  value={store.persData[name].value} />
            <span>{
              (store.persData[name].valid === null || store.persData[name].valid) ? "" : store.persData[name].errorText
            }</span>
         </div>
       )
       inputs.push(item)
     }


    return (
      <React.Fragment>
        <form>
          {inputs}
        </form>
        <button onClick={() => this.props.history.push(routesMap.bill)} disabled={store.isDisabled}>Оформить заказ</button>
      </React.Fragment>
    )
  }

}

export default Cart;