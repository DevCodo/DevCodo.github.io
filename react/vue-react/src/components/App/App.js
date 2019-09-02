import React, { Component } from 'react';

import './App.scss';
import Input from '../Input/Input';


export class App extends Component {

  state = {
    info: [
      {
        name: "Name",
        value: "dfdfd",
        pattern: /^[a-zA-Z]{2,30}$/,
        valid: false
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{5,30}$/,
        valid: false
      },
      {
        name: "Email",
        value: "",
        pattern: /.+@.+/,
        valid: false
      },
      {
        name: "Some Field",
        value: "fddfd",
        pattern: /.+/,
        valid: false
      },
    ],
  
  }

  changeValue = (ind, value, valid) => {
    let info = [...this.state.info];
    info[ind] = {...info[ind], value, valid }
    if (valid) this.setState({count: this.state.count + 1})
    this.setState({info});
  }

  setProgress = () => {
    const {info} = this.state
    let count = 0;
    let length = info.length;
    info.forEach(item => {
      if (item.valid) count++
    })
    return {width: `${count / length * 100}%`}
  }

  render() {
    
    let items = this.state.info.map((item, ind) => {
      return <Input {...item} key={ind}
                    changeValue={(value, valid) => {this.changeValue(ind, value, valid)}}/> 
    })

    let setProgress = this.setProgress();

    return (
      <div>
        <div className="wrapper">
          <div className="progress" style={setProgress}></div>
        </div>
        {items}
      </div>
    );
  }
}

export default App;

