import React from 'react';

import style from './new-item.module.scss';

export default class extends React.Component {

  state = {
    id: "",
    name: "",
    price: "",
    current: "",
    isShow: false
  }

  openForm = () => {
    this.setState({ isShow: true });
  }
  addNewItem = () => {
    let { id, name, price, current } = this.state;
    this.props.addItem(+id, name, +price, +current);
    this.setState({ isShow: false, id: "", name: "", price: "", current: "" });
  }

  render( { id, name, price, current, isShow } = this.state ) {
    
    let form = (
      <div className={ style.wrapper }>
        <div className={ style.box }>
          <input value={id} placeholder="id" onChange={(e) => this.setState({ id: e.target.value })}/>
          <input value={name} placeholder="Наименование" onChange={(e) => this.setState({ name: e.target.value })}/>
          <input value={price} placeholder="Цена" onChange={(e) => this.setState({ price: e.target.value })}/>
          <input value={current} placeholder="Количество" onChange={(e) => this.setState({ current: e.target.value })}/>
          <button onClick={this.addNewItem}>Добавить</button>
        </div>
      </div>
    )

    let isShowForm = isShow ? form : false;

    return (
      <React.Fragment>
      <button onClick={this.openForm}>Добавить товар</button>

      {isShowForm}
      
      </React.Fragment>
    )
  }
};