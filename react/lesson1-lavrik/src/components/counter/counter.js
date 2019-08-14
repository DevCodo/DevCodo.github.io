import React from 'react';
import PropTypes from 'prop-types';
import style from './counter.scss';

export default class extends React.Component {


  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  static defaultProps = {
    min: -103,
    max: 100
  }

  state = {
    count: this.props.min,
    value: this.props.min,
    header: "Корзина",
    text: "",
    disabletPlus: false,
    disabletMinus: true
  }

  increment = () => {
    this.setCount(this.state.count + 1);
  }

  decrement = () => {
   this.setCount(this.state.count - 1);
  }
  
  setNewCount = () => {
    let num = parseInt(this.state.value);
    this.setCount( isNaN(num) ? this.props.min : num );
  }
  
  setValue = (e) => {
    this.setState({ value: e.target.value });
  }

  setCount(num) {
    let count = Math.min( Math.max(num, this.props.min), this.props.max );
    this.onDisablet(count);
    this.setState({ count, value: count });
  }

  checkEnderKey = (e) => {
    if (e.keyCode == 13) {
      this.setNewCount();
    }
  }

  onDisablet(count) {
    let {min, max} = this.props;

    if (count == max) {
      this.setState({ disabletPlus: true })
    } else if (this.state.disabletPlus) {
      this.setState({ disabletPlus: false })
    }
    
    if (count == min) {
      this.setState({ disabletMinus: true })
    } else if (this.state.disabletMinus) {
      this.setState({ disabletMinus: false })
    }
  }


  render() {

    return (
      <div className={ style.counter }>
        <p>{this.state.header}</p>

        <button onClick={this.decrement} disabled={this.state.disabletMinus}>-</button>

        <input type="text" 
                value={this.state.value} 
                onChange={this.setValue}
                onBlur={this.setNewCount}
                onKeyUp={this.checkEnderKey} />

        <button onClick={this.increment} disabled={this.state.disabletPlus}>+</button>


      </div>
    )
  }
}