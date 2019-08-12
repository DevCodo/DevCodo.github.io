import React from 'react';

import style from './counter.scss';

export default class extends React.Component {

  state = {
    count: this.props.min,
    header: "Корзина",
    text: ""
  }

  increment = () => {
    let {max} = this.props;
    let count = this.state.count + 1 > max ? max : this.state.count + 1;
    this.setState({ count })
  }

  decrement = () => {
    let {min} = this.props;
    let count = this.state.count - 1 < min ? min : this.state.count - 1;
    this.setState({ count })
  }

  setNewCount = (e) => {
    if (isNaN(e.target.value)) return;
    
    let {min, max} = this.props;

    let count = e.target.value;

    if (count > max) {
      count = max;
    } else if (count < min || count == "") {
      count = min;
    }

    this.setState({ count })
  }
  
  writing = (e) => {
    this.setState({ text: this.state.text + e.target.value})
  }


  render() {

    return (
      <div className={ style.counter }>
        <p>{this.state.header}</p>

        <button onClick={this.decrement}>-</button>

        <input type="text" value={this.state.count} onChange={this.setNewCount} />

        <button onClick={this.increment}>+</button>

        <br/>

        <input type="text" value="" onChange={this.writing} />

        <div>{this.state.text}</div>

      </div>
    )
  }
}