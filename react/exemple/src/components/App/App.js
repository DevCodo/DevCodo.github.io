import React, { Component } from 'react';
import './App.scss'
import Input from "../Input/Input"

class App extends Component {

  state = {
    info: [
      {
        name: "Name",
        value: "",
        pattern: /^[a-zA-Z]{2,30}$/,
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{7,30}$/,
      },
      {
        name: "Email",
        value: "sdsd",
        pattern: /.+/,
      },
      {
        name: "Some Field",
        value: "",
        pattern: /.+/,
      },
    ],
    progress: {width: "50%"}
  }

  componentDidMount() {
    const progress = [];
    this.state.info.forEach(item => {
      progress.push(false);
    })
    this.setState({progress})
    console.log("dfdf",this.state.progress);
  }

  changeValue = (value, name) => {
    let info = [...this.state.info];
    let ind = info.findIndex(item => item.name === name);
    info[ind] = {...info[ind], value};
    this.setState({info})
  }

  isValid = (param, name) => {
    let ind = this.state.info.findIndex(item => item.name === name);
    let progress = [...this.state.progress];
    progress[ind] = param;
    console.log(progress)
    this.setState({progress})
  }
 
  render() {

    const items = this.state.info.map( item => {
      return (
        <Input {...item} key={item.name} changeValue={this.changeValue} isValid={this.isValid}/>
      )
    })

    // let setProgress = () => {
    //   let count = 0;
    //   this.state.progress.forEach(item => {
    //     if (item) count++
    //   })
    //   return {
    //     width: `${count / this.state.progress.length * 100}%`
    //   }
    // }

    return (
      <div>
        <div className="wrapper">
          <div className="progress" style={this.state.progress}></div>
        </div>
        {items}
      </div>
    );
  }
}

export default App;

