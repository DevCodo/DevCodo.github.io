import React from 'react';
import {observable, computed, action} from 'mobx';

class Store {

  @observable products = getProducts();
  
  @computed get total() {
    return this.products.reduce((t, el) => t + el.price * el.current, 0);
  }
  
  @action removeProduct(ind) {
    this.products.splice(ind, 1);
  }
  
  @action changeProduct(ind, current) {
    let newCurrent = Math.min( Math.max( current, 1), this.products[ind].rest);
    this.products[ind].current = newCurrent;
  }

  @observable persData = {
    name: {
      label: "Ваше Имя",
      value: "",
      validator: val => /^[aA-zZ,аА-яЯ,ё,Ё]{7,15}$/.test(val),
      errorText: "От 7 букв",
      valid: null
    }, 
    phone: {
      label: "Ваш телефон",
      value: "",
      validator: val => /^[0-9]{7,15}$/.test(val),
      errorText: "От 7 до 15 цифр",
      valid: null
    },
    mail: {
      label: "Ваша почта",
      value: "",
      validator: val => /^.+@.+$/.test(val),
      errorText: "От 7 до 15 цифр",
      valid: null
    }
  }

  @computed get isDisabled() {
    return !Object.values(this.persData).every((el) => el.valid);
  }

  @action changePersData(name, value) {
    let label = this.persData[name];
    label.value = value;

    label.valid = label.validator(value);
  }
 
}

export default new Store();



function getProducts() {
  return [
    {
      id: 15,
      name: "iphone 7s",
      price: 40000,
      rest: 7,
      current: 1
    }, {
      id: 33,
      name: "OnePlus 7",
      price: 30000,
      rest: 5,
      current: 1
    }, {
      id: 48,
      name: "Samsung 10 Pro",
      price: 70000,
      rest: 13,
      current: 1
    }, {
      id: 589,
      name: "Samsung 9s",
      price: 60000,
      rest: 4,
      current: 1
    }, {
      id: 84,
      name: "Xiaomi 8 Pro",
      price: 25000,
      rest: 55,
      current: 1
    }
  ];
}