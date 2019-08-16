import React from 'react';
import store from '../service/store';
import {observer} from 'mobx-react';

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
        <button onClick={ () => store.showBill(true) } disabled={store.isDisabled}>Оформить заказ</button>
      </React.Fragment>
    )
  }

}

export default Cart;