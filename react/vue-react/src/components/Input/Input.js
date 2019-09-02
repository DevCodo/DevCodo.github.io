import React, { Component } from 'react';

import  './Input.scss';
export class Input extends Component {

  state = {
    showClass: this.props.value
  }

  componentDidMount() {
    const {value, pattern, changeValue} = this.props;
    setTimeout(() => {
      changeValue(value, pattern.test(value));
    }, 0);
  }

  changeValue = (e) => {
    let {changeValue, pattern} = this.props;
    let valid = pattern.test(e.target.value);
    changeValue(e.target.value, valid);
    this.setState({showClass: true});
  }

  setClass = () => {
    const {value, pattern, changeValue} = this.props;
    if (this.state.showClass) {
      
      return pattern.test(value) ? "ok" : "off";
    }
  }

  render() {

    const {name, value, pattern} = this.props;

    let classInput = this.setClass();

    return (
      <div>
        <p>{name}</p>
        <input value={value} onChange={this.changeValue} className={classInput} />
      </div>
    );
  }
}

export default Input;
