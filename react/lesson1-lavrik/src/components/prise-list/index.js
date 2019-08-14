import React from 'react';

import ItemCount from './item-count';
import NewItem from './new-item/new-item';

export default class extends React.Component {
  
  state = {
    products: [
      {
        id: 15,
        name: "iphone 7s",
        price: 40000,
        curent: 7,
        count: 1
      }, {
        id: 33,
        name: "OnePlus 7",
        price: 30000,
        curent: 5,
        count: 1
      }, {
        id: 48,
        name: "Samsung 10 Pro",
        price: 70000,
        curent: 13,
        count: 1
      }, {
        id: 589,
        name: "Samsung 9s",
        price: 60000,
        curent: 4,
        count: 1
      }, {
        id: 84,
        name: "Xiaomi 8 Pro",
        price: 25000,
        curent: 55,
        count: 1
      }
    ]
  }

  changeCount = (newCount, ind) => {
    let products = [...this.state.products];
    products[ind] = {...products[ind], count: newCount};

    this.setState({ products });
  }

  deleteItem = (ind) => {
    let products = [...this.state.products];
    products.splice(ind, 1);

    this.setState({ products });

  }

  addItem = (id, name, price, curent) => {
    let products = [...this.state.products];
    products.push( { id, name, price, curent, count: 1 });

    this.setState({ products });
  }


  render() {
    let totalSum = 0;
    let productList = this.state.products.map((el, i) => {
      let sum = el.price * el.count
      totalSum += sum;
      return (
        <tr key={el.id}>
          <td>{ el.name }</td>
          <td>{ el.price }</td>
          <td><ItemCount ind={i} curent={el.curent} count={el.count} onChange={this.changeCount}/></td>
          <td>{ sum }</td>
          <td><button onClick={ () => this.deleteItem(i) }>x</button></td>
        </tr>
      )
    })

    return (
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
          {productList}
          <tr>
            <td>
              <NewItem addItem={this.addItem}/>
            </td>
          </tr>
          <tr>
            <td>Общая сумма</td>
            <td>{totalSum}</td>
          </tr>
        </tbody>

      </table>
    )
  }
};