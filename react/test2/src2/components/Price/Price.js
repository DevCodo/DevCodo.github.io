import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

import {routesMap, urlBuild} from '../service/routes';
import store from './../service/store';

@observer class Price extends React.Component {

  render() {
    let posts = [1,2,3];

    posts = posts.map(num => {
      return (
        <div key={num}>
          <Link to={urlBuild('blogPost', num)}>Post #{num}</Link>
        </div>
      )
    })

    let products = store.products.map((el, i) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.price}</td>
          <td>
            <button onClick={ () => store.changeProduct(i, el.current - 1) }>-</button>
            <span>{el.current}</span>
            <button onClick={ () => store.changeProduct(i, el.current + 1) }>+</button>
          </td>
          <td>{el.price * el.current}</td>
          <td>
            <button onClick={ () => store.removeProduct(i) }>x</button>
          </td>
        </tr> 
      )
    })


    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {products}
            <tr>
              <td>Общая сумма: {store.total}</td>
            </tr>
          </tbody>
        </table>
        <Link to={routesMap.cart}>Перейти к оформлению</Link>
        {posts}
      </>
    )
  }

};

export default Price;